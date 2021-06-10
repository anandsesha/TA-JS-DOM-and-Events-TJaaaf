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
    if(usernameElm.value.length < 4){
        errorMessage = "Username can't be less than 4 characters";
        usernameElm.nextElementSibling.innerText = errorMessage;
    }
    
    let nameElm = event.target.elements.name;
    if(nameElm.value.split('').some(char => Number(char))){
        errorMessage = "You can't use number in the name field"
        nameElm.nextElementSibling.innerText = errorMessage;
    }
    
    let emailElm = event.target.elements.email;
    if(!emailElm.value.includes('@')){
        errorMessage = "Email must contain the symbol @"
        emailElm.nextElementSibling.innerText = errorMessage;
    }else if(emailElm.value.length <= 6){
        errorMessage = "Email must be at least 6 characters"
        emailElm.nextElementSibling.innerText = errorMessage;
    }

    // HTML "type" validation exists. We cannot enter other than number in 
    // phone field. JS validation added for the same below 
    let phoneElm = event.target.elements.phone;
    console.log(phoneElm.value)
    if(phoneElm.value.split('').some(val => !Number(val))){
        errorMessage = "Phone number can only contain numbers";
        phoneElm.nextElementSibling.innerText = errorMessage;
    }else if(phoneElm.value.length < 7){
        errorMessage = "Length of phone number can't be less than 7";
        phoneElm.nextElementSibling.innerText = errorMessage;
    }


    let passwordElm = event.target.elements.password;
    let confirmPassword = event.target.elements.repassword;
    console.log(passwordElm.value,confirmPassword.value)
    if(passwordElm.value !== confirmPassword.value){
        errorMessage = "Password and confirm password must be same";
        confirmPassword.nextElementSibling.innerText = errorMessage;
    }
    
    else{
        let buttonElm = document.querySelector('button')
        buttonElm.nextElementSibling.innerText = "User Added Successfully!"
    }
}