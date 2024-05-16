// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
 let cards = []
let sum = 0
let hasBlackJack = false
// let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Kenny",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
  
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber === 1) {
        return 11
    }else if(randomNumber>10) {
        return 10
    }else{return randomNumber}
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard+secondCard]
    sum = firstCard + secondCard
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
    cardsEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new Card from the deck!")
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
    
}