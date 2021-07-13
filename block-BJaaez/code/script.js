let rootUl = document.querySelector('.todo-list')
let searchBox = document.querySelector('.search-box') 

searchBox.addEventListener('keyup',handleSearch)

let allTodos = []

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
    }
}


{/* <li>
    <label for="1">
        <input type="checkbox" class="checkbox" id="1"><span>Learn DOM</span>
    </label>
    <button>x</button>
</li>
<hr>  */}

function createUI(data = allTodos){
    rootUl.innerText = ""

    data.forEach(todo => {
        let li = document.createElement('li')
        let label = document.createElement('label')
        let input = document.createElement('input')
        input.id = 1;
        input.type = "checkbox"
        let span = document.createElement('span')
        console.log(todo)
        span.innerText = todo.name;
        label.append(input,span)
        // let closeSpan = document.createElement('span')
        // span.classList.add('close_button')
        // span.innerText = 'x'
        let button = document.createElement('button')
        button.innerText = '❌'

        li.append(label,button)
        rootUl.append(li)
    })
}

createUI();