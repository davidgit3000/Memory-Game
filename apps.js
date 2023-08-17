const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice_cream.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice_cream.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIDs = []
const cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img') // or '#gird img'
    const optionOneId = cardsChosenIDs[0]
    const optionTwoId = cardsChosenIDs[1]
    //console.log(cards)
    //console.log('check for match!')

    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        //alert('You have clicked the same images!')
    }

    else if (cardsChosen[0] == cardsChosen[1]){
        //alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        cards[optionOneId].removeEventListener('click', flipCard) // remove flipCard function once matched
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        //alert('Oh oh! Try again!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIDs = []

    if (cardsWon.length == (cardArray.length / 2)){ // = 6
        resultDisplay.textContent = "Woo Hoo! You beat the game."
    }
}

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    //console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIDs.push(cardId)
    //console.log('clicked', cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIDs)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
