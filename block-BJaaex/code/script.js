// Card data
const cardsArray = [
  {
    name: 'shell',
    img: 'img/blueshell.png',
  },
  {
    name: 'star',
    img: 'img/star.png',
  },
  {
    name: 'bobomb',
    img: 'img/bomb.png',
  },
  {
    name: 'mario',
    img: 'img/mario.png',
  },
  {
    name: 'luigi',
    img: 'img/luigi.png',
  },
  {
    name: 'peach',
    img: 'img/peach.png',
  },
  {
    name: '1up',
    img: 'img/1up.png',
  },
  {
    name: 'mushroom',
    img: 'img/mushroom.png',
  },
  {
    name: 'thwomp',
    img: 'img/om.png',
  },
  {
    name: 'bulletbill',
    img: 'img/row.png',
  },
  {
    name: 'coin',
    img: 'img/coin.png',
  },
  {
    name: 'goomba',
    img: 'img/sword.png',
  },
]

// Step I. Display 12 cards

let game = document.getElementById('game')

// Create a section with a class of grid and append it to game div 
let section = document.createElement('section')
section.classList.add('grid')

game.append(section)

// Step II. Duplicate the cardsArray to have 2 sets of 12. Total 24 cards visible then.
console.log(cardsArray.concat(cardsArray))
let gameGrid = cardsArray.concat(cardsArray)

gameGrid.sort(() => 0.5 - Math.random())

gameGrid.forEach(objectItem => {
  // Create a div for each card and add css card class
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  // Set the name attribute of the objectItem as the card name
  cardDiv.dataset.name = objectItem.name;
  // Apply the background image of the div to the cardsArray image
  cardDiv.style.backgroundImage = `url(${objectItem.img})`


  // Append the div to the grid section
  section.append(cardDiv)
})

// Step III. Randomize the display of cards

// Step IV. Add .selected style for selected cards. We'll add an event listener to the entire section (grid).
//  Anytime an element is clicked, the .selected class will be applied to it.

let firstGuess = ''
let secondGuess = ''
let previousTarget = null

let count = 0;
section.addEventListener('click',function(event){
  // The event target is our clicked item
  let clicked = event.target;


  // Do not allow the grid section itself to be selected; only select divs inside the grid
  console.log(clicked.nodeName)
  if(clicked.nodeName === 'SECTION' || clicked === previousTarget){
    return
  }

  if(count < 2){
    count++;
    
    if(count === 1){
      // Assign first guess
      firstGuess = clicked.dataset.name;
      console.log(firstGuess);
      clicked.classList.add('selected')
    }else{
      // Assign second guess
      secondGuess = clicked.dataset.name
      console.log(secondGuess);
      clicked.classList.add('selected')
    } 

    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        match()
        resetGuesses();
      }else{
        resetGuesses();
      }
    }
    // Set previous target to clicked
    previousTarget = clicked;

  }
})

let match = () => {
  let selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}


// Step V. Only allow two cards to be selected at a time
// In order to do this, we'll need to store the guesses and counter somewhere. First we'll just store the count.


// Step VI. Determine if two selected cards are a match and hide them.
// Now there's a problem here - can you guess what it is? If I select the same element twice, it will consider it a match, because they both have the same data-name property. I shouldn't be able to
// select the same element twice, so we'll have to fix this before moving on. First, I'll add a previousTarget variable.

// Step VII. Reset guess count after 2

const resetGuesses = () => {
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.remove('selected')
  })
}

// Step VIII. Add delay to selections. We want a delay after we make a selection so the user can see what their selection was before the card is hidden again. Right now it doesn't matter
// because everything is visible, but we can just take care of it before putting the final style touches on the cards.