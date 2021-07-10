let input = document.querySelector('input[type="text"]')
let rootElm = document.querySelector('.todo-list')
let filtersUl = document.createElement('ul')

let defaultSelected = "all";

let all = document.querySelector('.all')
let active = document.querySelector('.active')
let completed = document.querySelector('.completed')
let clearCompleted = document.querySelector('.clear-completed')

let allTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

clearCompleted.addEventListener('click',() =>{
    allTodos = allTodos.filter((todo) => !todo.isDone)
    createUI()
    defaultSelected = "clear-completed"
    updateActiveButton();
    localStorage.setItem('todos',JSON.stringify(allTodos))
})

active.addEventListener('click',() => {
    let notCompleted = allTodos.filter((todo) => !todo.isDone)
    createUI(notCompleted) 
    defaultSelected = "active"
    updateActiveButton();
})

completed.addEventListener('click',() => {
    let completedTodos = allTodos.filter((todo) => todo.isDone)
    createUI(completedTodos) 
    defaultSelected = "completed"
    updateActiveButton();
})

all.addEventListener('click',() => { 
    createUI(); // Because all displays everthing. So render full UI
    defaultSelected = "all"
    updateActiveButton();
})

//A function just to highlight the selected button among -> all, active, completed, clear completed
function updateActiveButton(btn = defaultSelected){
    all.classList.remove('selected')
    active.classList.remove('selected')
    completed.classList.remove('selected')
    clearCompleted.classList.remove('selected')

    if(btn === "all"){
        all.classList.add('selected')
    }
    if(btn === "active"){
        active.classList.add('selected')
    }
    if(btn === "completed"){
        completed.classList.add('selected')
    }
    if(btn === "clear-completed"){
        clearCompleted.classList.add('selected')
    }
}

updateActiveButton();

input.addEventListener('keyup', handleInput)


function handleInput(event){
    console.log(event.keyCode)
    if(event.keyCode === 13 && event.target.value !== ""){
        let todo = {
            name: event.target.value,
            isDone: false,
        }
        allTodos.push(todo)
        event.target.value = ""
        createUI();
        localStorage.setItem('todos',JSON.stringify(allTodos))
    }
}

{/* <li>
    <label for="1">
        <input type="checkbox" class="checkbox" id="1">
        Learn DOM
    </label>
    <button>X</button>
</li>
<hr> */}

function createUI(data = allTodos){
    rootElm.innerText = ""
    // filtersUl.innerText = ""

    data.forEach((todo,index) =>{

    let li = document.createElement('li')
    let label = document.createElement('label')
    label.id = index
    let input = document.createElement('input')
    input.type = "checkbox"
    input.id = index
    input.checked = todo.isDone;
    input.setAttribute('data-id',index)
    input.addEventListener('input',handleToggle)

    let span = document.createElement('span')
    span.innerText = todo.name;
    label.append(input,span)
    let button = document.createElement('button')
    button.innerText = '❌'
    button.setAttribute('data-id',index)
    button.addEventListener('click', handleDelete)

    li.append(label,button)
    rootElm.append(li)
    
    })

    // let hr = document.createElement('hr')
    // filtersUl.classList.add('filters')
    // let filterLi1 = document.createElement('li')
    // let a1 = document.createElement('a')
    // a1.innerText = 'All'
    // a1.classList.add('selected')
    // filterLi1.append(a1)
    // let filterLi2 = document.createElement('li')
    // let a2 = document.createElement('a')
    // a2.innerText = 'Active'
    // filterLi2.append(a2)
    // let filterLi3 = document.createElement('li')
    // let a3 = document.createElement('a')
    // a3.innerText = 'Completed'
    // filterLi3.append(a3)

    // filtersUl.append(filterLi1,filterLi2,filterLi3)
    // rootElm.append(hr,filtersUl)
}

createUI();

function handleDelete(event){
    console.log(event.target.dataset.id)
    let id = event.target.dataset.id;
    allTodos.splice(id,1)
    console.log(allTodos)
    createUI();
    localStorage.setItem('todos',JSON.stringify(allTodos))
}

function handleToggle(event){
    console.log(event.target.dataset.id)
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    console.dir(event.target.nextElementSibling)
    // event.target.nextElementSibling.style= 'text-decoration:line-through'

    createUI();
    localStorage.setItem('todos',JSON.stringify(allTodos))
}