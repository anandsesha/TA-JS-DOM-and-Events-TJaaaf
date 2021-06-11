let form = document.querySelector('form')
let model = document.querySelector('.modal_overlay')
let modelInfo = document.querySelector('.modal_info')

let userInfo = {}

form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    let elements = event.target.elements

    // Storing form data in userInfo Object
    userInfo.name = elements.name.value
    userInfo.email =  elements.email.value
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.movie = elements.movie.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.checked;

// we have collected the data in an userInfo object,
// Now we need to display this data in a model layout

// so first we need to add the class 'open' to make model
// which was created by html css,  visible.
    
    model.classList.add('open')

//Now as soon as we click on close button it should hide modal
    let closeButton = document.querySelector('.modal_close') 
    closeButton.addEventListener('click',handleClick)
    
    
    displayInfo(userInfo);
}

function handleClick(event){
    model.classList.remove('open')
}

//Now, to display the collected data collected in the modal
function displayInfo(info={}){
    modelInfo.innerHTML = ""

    let h1 = document.createElement('h1')
    h1.innerText = `Hello ${info.name}`;

    let email = document.createElement('p')
    email.innerText = `Email: ${info.email}`;

    let choice = document.createElement('p')
    choice.innerText = `Watching choice: ${info.choice}`;

    let color = document.createElement('p')
    color.innerText = `Color: ${info.color}`;

    let movie = document.createElement('p')
    movie.innerText = `Movie Rating: ${info.movie}`;

    let book = document.createElement('p')
    book.innerText = `Book Genre: ${info.book}`;

    let terms = document.createElement('p')
    terms.innerText = `👍 : ${
        info.terms 
        ? "You have accepted the terms and conditions"
        : "You have NOT accepted the terms and conditions"
    }`;


    modelInfo.append(h1, email, choice, color, movie, book, terms)
}