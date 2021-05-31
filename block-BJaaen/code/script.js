//

let youLis = document.querySelectorAll('.you li')

let initialValue = 0;

youLis.forEach(li => {
    li.addEventListener('click',function(){
        handleClick(event,li);
    })
    initialValue += 1;
})

function handleClick(event,li){
    let computerLis = document.querySelectorAll('.computer li a i')
    let randomNumber = Math.floor(Math.random() * 5)
    let span = document.querySelector('.computer-head')
    let result = document.querySelector('.result')

    
    
    if(li.className.includes('rock') == event.target.className.includes('rock')){
        computerLis.forEach((compLi) => {
            compLi.style.color = 'black'
        })    
        
        span.concat('---Rock')
        result.innerText = 'Yooo'
        return;
    }
    
}