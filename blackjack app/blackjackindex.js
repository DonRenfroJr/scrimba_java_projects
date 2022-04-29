
let player = {
    name: "Don", 
    chips: 200
}
let cards = [] //<-array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let nextCard =  Math.floor(Math.random() * 13) + 1
    if  (nextCard === 1) {
        return 11
    } else if (nextCard > 10) {
        return 10
    } else {
        return nextCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
        console.log(cards)  
    }

    sumEl.textContent = "Sum: " + sum
    if (sum<=20) {
        //console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?"
        
    } 
    else if (sum === 21) {
        //console.log("Wohoo! You've got Blackjack! ")
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        //console.log("You're out of the game! ")
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }    
}
    

//console.log(isAlive)
//console.log(hasBlackJack)
//console.log(message)

