let form = document.querySelector('form')

let userInfo = {}

form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    console.log(`form Submitted`)
    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.love = form.elements[2].value;
}

let submitButton = document.querySelector('button')
submitButton.addEventListener('click',handleClick)

function handleClick(event){
    let div = document.createElement('div')
    console.log(`INside click`)
}