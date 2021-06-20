{/* <li class="movie">
              <input type="checkbox" class="checkbox"><span>The Godfather</span>
              <button>❌</button>
            </li>
<hr> */}

let form = document.querySelector('form')
let ul = document.createElement('ul')
ul.classList.add('movies_list')


form.addEventListener('submit',handleSubmit)

let movieInfo = {}

function handleSubmit(event){
    event.preventDefault();
    // console.dir(form.elements.search_box.value)
    let movie_name = event.target.elements.search_box.value;
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.type = 'checkbox'
    input.classList.add('checkbox')
    input.id = 'inputs'
    let span = document.createElement('span')
    span.innerText = movie_name;
    movieInfo.name = movie_name;
    // console.log(movieInfo.name)
    // console.log(movie_name)
    let button = document.createElement('button')
    button.innerText = '❌'
    button.addEventListener('click',handleClick)

    li.append(input,span,button)
    let hr = document.createElement('hr')
    ul.append(li,hr)
    form.append(ul)
}

// let button = document.querySelector('button')

function handleClick(event){
  document.getElementById('inputs').value = ''
  // document.getElementsByClassName('checkbox').innerText = ""
}

