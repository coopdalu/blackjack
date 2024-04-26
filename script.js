let firstCard = 3

let secondCard = 5

let sum = firstCard + secondCard

if(sum < 21){
    console.log("Would you like to draw again?🤔")
}else if (sum === 21){
    console.log("BLACKJACK!🥳")
}else if (sum > 21) {
    console.log("sorry,play again?😒")
}
