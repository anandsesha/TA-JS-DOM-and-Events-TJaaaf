let form = document.querySelector('form')

form.addEventListener('submit',handleSubmit)

//To validate:
//1. Username can't be less than 4 characters
//2. Name can't be numbers
//3. Email must contain the symbol @
//4. Email must be at least 6 characters
//5. Phone numbers can only be a number
//6. Length of phone number can't be less than 7
//7. Password and confirm password must be same.

let errorMessage = "";

function handleSubmit(event){
    event.preventDefault();

    let usernameElm = event.target.elements.username;
    let passwordElm = event.target.elements.password;
    let confirmPassword = event.target.elements.repassword;
    let nameElm = event.target.elements.name;
    let emailElm = event.target.elements.email;
    // HTML "type" validation exists. We cannot enter other than number in 
    // phone field. JS validation added for the same below
    let phoneElm = event.target.elements.phone;

    console.log(usernameElm)

    // Username
    if(usernameElm.value.length < 4){
        errorMessage = "Username can't be less than 4 characters";
        usernameElm.nextElementSibling.innerText = errorMessage;
        usernameElm.classList.add('error')
    }else{
        usernameElm.nextElementSibling.innerText = "";
        usernameElm.classList.remove('error')
        usernameElm.classList.add('success')
    }

    // Name
    if(nameElm.value.split('').some(char => Number(char))){
        errorMessage = "You can't use number in the name field"
        nameElm.nextElementSibling.innerText = errorMessage;
        nameElm.classList.add('error')
    }

    // Email
    if(!emailElm.value.includes('@')){
        errorMessage = "Email must contain the symbol @"
        emailElm.nextElementSibling.innerText = errorMessage;
        emailElm.classList.add('error')
    }else if(emailElm.value.length <= 6){
        errorMessage = "Email must be at least 6 characters"
        emailElm.nextElementSibling.innerText = errorMessage;
        emailElm.classList.add('error')
    }else{
        emailElm.nextElementSibling.innerText = "";
        emailElm.classList.remove('error')
        emailElm.classList.add('success')
    }

    // Phone Number
    if(phoneElm.value.split('').some(val => !Number(val))){
        errorMessage = "Phone number can only contain numbers";
        phoneElm.nextElementSibling.innerText = errorMessage;
        phoneElm.classList.add('error')
    }else if(phoneElm.value.length < 7){
        errorMessage = "Length of phone number can't be less than 7";
        phoneElm.nextElementSibling.innerText = errorMessage;
        phoneElm.classList.add('error')
    }else{
        phoneElm.nextElementSibling.innerText = "";
        phoneElm.classList.remove('error')
        phoneElm.classList.add('success')
    }


    if(passwordElm.value !== confirmPassword.value){
        errorMessage = "Password and confirm password must be same";
        passwordElm.nextElementSibling.innerText = errorMessage;
        passwordElm.classList.add('error')
    }else{
        passwordElm.nextElementSibling.innerText = "";
        confirmPassword.nextElementSibling.innerText = "";
        passwordElm.classList.remove('error')
        confirmPassword.classList.remove('error')
        passwordElm.classList.add('success')
        confirmPassword.classList.add('success')
    }

    let button = document.querySelector('button')
    if(!(usernameElm.classList.contains('error') || 
    nameElm.classList.contains('error') || 
    emailElm.classList.contains('error') || 
    phoneElm.classList.contains('error') ||
    passwordElm.classList.contains('error') ||
    confirmPassword.classList.contains('error'))){
        button.nextElementSibling.innerText = "User Added Successfully👌"
    }
}