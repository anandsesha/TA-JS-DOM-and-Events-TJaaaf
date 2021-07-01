// Select the root element
let cardsUl = document.querySelector('.cards')
let tagsUl = document.querySelector('.tags')
let search = document.querySelector('.search-box')


// 1. Get all the people inside got.houses
let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people);
    return acc;
},[])

// 2. Based on all people obtained from got.houses create the UI each card 
function createCardsUI(data = []){
    cardsUl.innerText = ""
    data.forEach((person) => {
        let li = document.createElement('li')
        li.classList.add('flex-30')
        let imgDiv = document.createElement('div')
        imgDiv.classList.add('image-div')
        let img = document.createElement('img')
        img.src = person.image;
        imgDiv.append(img)
        let h2 =  document.createElement('h2')
        h2.innerText = person.name;
        let p = document.createElement('p')
        p.innerText = person.description;
        let a = document.createElement('a')
        a.innerText = "Learn More!"

        li.append(imgDiv,h2,p,a)
        cardsUl.append(li)
    })
}

createCardsUI(allPeople)

// 3. Now we will filter by tags -> 
// Get name of each house on each tag. So, use map since input array size is same as output

let allTags = got.houses.map(house => house.name)
console.log(`All Tags -> ${allTags}`) //Will print each house's name

let activeTag = "" //For setting active color on that house which is clicked now

// Using name of for each house fill in the innerText of each tag button
// So create the tags bar
function createTagsUI(tags = []){
    tagsUl.innerText = ""
    tags.forEach((tag) => {
        let button = document.createElement('button')
        button.innerText = tag;
        button.classList.add('button')
        button.classList.add('button-color')

        //For the clicked tag, make it noticable using css active class
        if(activeTag === tag){
            button.classList.remove('button-color')
            button.classList.add('active')
        }
        

    // I. Filter by house (using created tags)
    button.addEventListener('click', () => {
        activeTag = tag; //It'll show active color only when clicked hence its under this 'click' event

        // When a tag is clicked, find those houses whos name is same as the tag which is clicked. 
        let filteredPeopleOfOneHouse = got.houses.find(house => house.name === tag).people || []
        console.log(filteredPeopleOfOneHouse)
        // Then for these found houses alone render UI
        createCardsUI(filteredPeopleOfOneHouse)
        
        // Also render Tags because you have to get the active class code written above in UI. So calling this function again will do that.
        createTagsUI(allTags)
    })

        tagsUl.append(button)
    })
}

createTagsUI(allTags);


// Now part II: Search
search.addEventListener('keyup',handleSearch)

function handleSearch(event){
    // first get the text entered in the search box
    let searchText = event.target.value;

    // using this text, filter people from allPeople array whose name includes the entered searchText
    let filteredPeople = allPeople.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase()))
    // And then render the UI with this array above
    createCardsUI(filteredPeople)
}