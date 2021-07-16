function generateRandomNumber(max){
    return Math.floor(Math.random() * max);
}

let button = document.querySelector('button')
let h2 = document.querySelector('h2')
let p = document.querySelector('p')

button.addEventListener('click',handleClick)

function handleClick(){
    let randomIndex = generateRandomNumber(data.length);
    let randomObjSelected = data[randomIndex];
    console.log(randomObjSelected)
    h2.innerText = randomObjSelected.question;
    p.innerText = randomObjSelected.answer;
}
handleClick()