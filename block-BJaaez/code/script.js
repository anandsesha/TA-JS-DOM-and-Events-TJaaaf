let rootUl = document.querySelector('.todo-list')
let searchBox = document.querySelector('input[type="search"]')

let all = document.querySelector('.all')
let active = document.querySelector('.active')
let completed = document.querySelector('.completed')
let clearCompleted = document.querySelector('.clear-completed')

let defaultSelected = "all";

let allTodos = localStorage.getItem('todos') ?  JSON.parse(localStorage.getItem('todos')) : []

//default selected -> all tab
all.classList.add('selected')
//1
clearCompleted.addEventListener('click',() => {
    allTodos = allTodos.filter(todo => !todo.isDone);
    createUI();
    localStorage.setItem('todos',JSON.stringify(allTodos))
})
//2
active.addEventListener('click',() => {
    let notCompleted = allTodos.filter(todo => !todo.isDone)
    createUI(notCompleted);
    defaultSelected = 'active'
    updateActiveButton();
})
//3
completed.addEventListener('click',() => {
    let completedTodos = allTodos.filter((todo) => todo.isDone)
    createUI(completedTodos) 
    defaultSelected = "completed"
    updateActiveButton();
})

//4
all.addEventListener('click',() => {
    createUI();
    defaultSelected = "all"
    updateActiveButton();
})

function updateActiveButton(btn = defaultSelected){
    all.classList.remove('selected')
    active.classList.remove('selected')
    completed.classList.remove('selected')
    clearCompleted.classList.remove('selected') 

    if(btn === 'all'){
        all.classList.add('selected')
    }
    if(btn === 'active'){
        active.classList.add('selected')
    }
    if(btn === 'completed'){
        completed.classList.add('selected')
    }
    if(btn === "clear-completed"){
        clearCompleted.classList.add('selected')
    }
}

updateActiveButton()

searchBox.addEventListener('keyup',handleSearch)

function handleSearch(event){
    console.log(event.keyCode)
    if(event.keyCode === 13 && event.target.value !== ""){
        let todo = {
            name: event.target.value,
            isDone: false,
        }
        allTodos.push(todo)
        event.target.value = ""
        createUI()
        localStorage.setItem('todos',JSON.stringify(allTodos))
    }
}


{/* <li>
    <label for="1">
    </label>
        <input type="checkbox" class="checkbox" id="1"><span>Learn DOM</span>
    <button>x</button>
</li>
<hr>  */}

function createUI(data = allTodos){
    rootUl.innerText = ""

    data.forEach((todo,index) => {
        let li = document.createElement('li')
        let label = document.createElement('label')
        label.id = index;
        let input = document.createElement('input')
        input.id = index;
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.addEventListener('input',handleToggle)
        input.setAttribute('data-id',index)

        let span = document.createElement('span')
        span.innerText = todo.name;
        label.append(input,span)
        let button = document.createElement('button')
        button.innerText = '❌'
        button.setAttribute('data-id',index)
        button.addEventListener('click',handleDelete)

        li.append(label,button)
        rootUl.append(li)
    })
}

createUI();

function handleDelete(event){
    console.log(event.target.dataset.id)
    let datasetId = event.target.dataset.id;
    allTodos.splice(datasetId,1)
    // console.log(allTodos)
    createUI();
    localStorage.setItem('todos',JSON.stringify(allTodos))
}

function handleToggle(event){
    console.log(event.target.dataset.id)
    let datasetId = event.target.dataset.id;
    allTodos[datasetId].isDone = !allTodos[datasetId].isDone;
    // console.log(allTodos)
    createUI();
    localStorage.setItem('todos',JSON.stringify(allTodos))
}