let input = document.querySelector(`input[type = "text"]`)
let ul = document.querySelector('.movies_list')

let allMovies = [
  {
    name: "Forest Gump",
    watched: false,
  },
  {
    name: "Inception",
    watched: true,
  }
]

input.addEventListener('keyup',(event) =>{
  event.preventDefault();

  console.log(event.target.value)
  //Step 1: adding a movie
  if(event.keyCode === 13){ //enter keycode 13
    console.log(event.target.value)
    
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = ""

    createMovieUI();

  }
});

//Step 2: Create below Layout in createMovieUI

{/* <li class="movie">
              <input type="checkbox" class="checkbox" id="1">
              <label for="1">The Godfather</label>
              <button>❌</button>
            </li>
<hr> */}

function createMovieUI(){

  ul.innerHTML = "";

  allMovies.forEach((movie, id) => {

    let li = document.createElement('li')
    let input = document.createElement('input')
    input.classList.add('checkbox')
    input.type = 'checkbox'
    input.id = id;
    input.checked = movie.watched;

    input.addEventListener('change',handleChecked)


    let label = document.createElement('label')
    label.for = id;
    label.innerText = movie.name;

    let button = document.createElement('button')
    button.innerText = '❌'
    button.setAttribute("data-id",id)

    button.addEventListener('click',handleClick)

    let hr = document.createElement('hr')

    li.append(input,label,button)
    ul.append(li,hr)
  })
}

createMovieUI();

function handleClick(event){
  console.log(event.target)
  // event.target.parentElement.remove(); To remove the movie OR:
  
  let id = event.target.dataset.id;

  //once I have the ID we have to delete a movie from allMovies array.
  // and re reder the UI
  allMovies.splice(id,1)
  createMovieUI(); 
}

function handleChecked(event){

  let id = event.target.id;
  console.log(id)

  allMovies[id].watched = !allMovies[id].watched; 
}