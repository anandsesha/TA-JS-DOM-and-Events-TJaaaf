// 1. Click on the small Box
// 2.  It'll show a number from 1 to 12 
// 3. Disappear in 5 secs



//-------------Without Event Delegation---------------------

// Selected all li's of first ul
let allLisOfFirstUl = document.querySelectorAll('.first li')

//Gave each of these li's a class name
allLisOfFirstUl.forEach(((box) => {
    box.classList.add('firstLis')
}))


//Selected all these first ul's li's by given class name
let allSmallBoxesFirst = document.querySelectorAll('.firstLis') 


allSmallBoxesFirst.forEach((smallBox) => {
    smallBox.addEventListener("click",function(){
        handleClick(event);
    })
    
})

function handleClick(event){
    let number = Math.floor(Math.random() * 12) + 1;
    // smallBox.innerText = number;
    event.target.innerText = number;
    
    //Disappear number in 5 secs 
    setTimeout(() => {
        event.target.innerText = ""
    }, 5000);
}


//-------------With Event Delegation---------------------

let allLisOfSecondUl = document.querySelectorAll('.second li')
allLisOfSecondUl.forEach((li) => {
    li.classList.add('secondLis')
})

let allSmallBoxesSecond = document.querySelectorAll('secondLis')

//Delegating to root (parent). i.e second ul
let secondUl = document.querySelector('.second')

secondUl.addEventListener('click', handleClick)