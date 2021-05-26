function main(){

let result = document.querySelector('.result')
let allBoxes = document.querySelectorAll('.box')
let count = 0;

allBoxes.forEach((box) => {
    box.addEventListener('click',handleClick)
})

function handleClick(event){
    //eval will do all operations and give calculated output
    
    //when equals is pressed
    if(event.target.classList.contains('equals')){
        result.innerText = eval(result.innerText)
        return;
    }

    //when clears is pressed
    if(event.target.innerText === 'C'){
        result.innerText = count;
        return;
    }

    //Over 0
    if(result.innerText == count) {
        result.innerText = event.target.innerText;
    } else {
         result.innerText += event.target.innerText
    }
}

}
main()