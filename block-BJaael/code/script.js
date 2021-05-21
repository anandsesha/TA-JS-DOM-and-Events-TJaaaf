let allChild = document.querySelectorAll('.child')
let parent = document.querySelector('.parent')

function getRandomColor(element){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    let backColor = `rgb(${r},${g},${b})`;
    // console.log(backColor)
    element.style.backgroundColor = backColor;
}

function getRandomNumber(element){
    let number = Math.floor(Math.random() * 500)

    console.log(number)
    element.innerText = number;
}


allChild.forEach((child) => {
    parent.addEventListener('mousemove',function(){
        return getRandomColor(child)
    })
})

allChild.forEach((child) => {
    parent.addEventListener('mousemove',function(){
        return getRandomNumber(child)
    })
})


