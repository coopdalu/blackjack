let firstCard = 4

let secondCard = 6

let cards = [firstCard,secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    
    if(sum <= 20){
        message = "Would you like to draw again?"
    }
    else if (sum === 21){
        message = "BLACKJACK!"
        hasBlackJack = true
    }
    else if (sum > 21) {
        message = "sorry,play again?"
        isAlive = false
    
    }
    messageEl.textContent=message

    sumEl.textContent= "Sum: "+sum

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

}

function newCard(){
    console.log("Drawing a new Card from the deck!")

    let thirdCard = 11

    sum += thirdCard

    renderGame()
}