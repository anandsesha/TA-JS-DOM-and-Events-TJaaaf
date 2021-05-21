let click = document.querySelector('.first')
let mouseMove = document.querySelector('.second')

function getRandomColor(element){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    let backColor = `rgb(${r},${g},${b})`;
    console.log(backColor)
    element.style.backgroundColor = backColor;
}

click.addEventListener('click',function(){
    return getRandomColor(click)
})

mouseMove.addEventListener('mousemove',function(){
    return getRandomColor(mouseMove)
})
