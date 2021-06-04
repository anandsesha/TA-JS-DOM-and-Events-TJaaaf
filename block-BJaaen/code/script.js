// 1. Convert Static HTML to dynamic using DOM 

let userRoot = document.querySelector('.user-icons')
let computerRoot = document.querySelector('.computer-icons')
let result = document.querySelector('.result')
let reset = document.querySelector('button')

// Now we'll put our li's inside respective ul (Delete li's from HTML)

// Create a dataset based on the alogrithm below:
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Scissors
let dataset = [
    {
        name: "rock",
        beats: "scissors"
    },
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    }
]

let userSelected = {}, computerSelected = {};

function getRandomNumber(max = 3){
    return Math.floor(Math.random() * max)
}

function createUserLayout(){

    userRoot.innerHTML = "";
    dataset.forEach(obj => {
        let li = document.createElement('li')
        let i = document.createElement('i')
        i.className = `fa fa-hand-${obj.name}-o`

        li.append(i)
        userRoot.append(li)

        if(userSelected.name === obj.name){
            li.classList.add('selected')
        }

        //upadte variables whenever user clicks on any icon
        li.addEventListener('click',function(){
            userSelected = obj; 
            computerSelected = dataset[getRandomNumber()]
            console.log(userSelected,computerSelected)

            getWinner(userSelected,computerSelected)            
            rerender();
        })

    })
}

createUserLayout();


// Similarly we'll put computer li's inside ul
function createComputerLayout(){

    computerRoot.innerHTML = "";
    dataset.forEach(obj => {
        let li = document.createElement('li')
        let i = document.createElement('i')
        i.className = `fa fa-hand-${obj.name}-o`

        li.append(i)
        computerRoot.append(li)

        if(computerSelected.name == obj.name){
            li.classList.add('selected')
        }
    })
}

createComputerLayout();

function getWinner(user, computer){
    // tie
    if(user.name === computer.name){
        result.innerText = 'Its a Tie'
    }
    // user wins
    else if(user.beats === computer.name){
        result.innerText = 'You Win'
    }
    // computer wins
    else{
        result.innerText = `Computer Wins`
    }

}

reset.addEventListener('click',function(){
    userSelected = {};
    computerSelected = {}
    rerender();
})

function rerender(){
    createUserLayout();
    createComputerLayout();
}