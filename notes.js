// let myPoints=3

// function add3Points(){
//     myPoints += 3
//     }

// function remove1Point(){
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)

// console.log("2"+2)//22
// console.log(11+7)//18
// console.log(6+"5")//65
// console.log("myPoints: "+5+9)//myPoints: 59
// console.log(2+2)//4
// console.log("11"+"14")//1114

// let errorParagraph=document.getElementById("error")
// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent="something went wrong, please try again"
// }

// let num1=8
// let num2=2
// document.getElementById("num1-el").textContent=num1
// document.getElementById("num2-el").textContent=num2
// let sumEl=document.getElementById("sum-el")
// function add(){
//     let result=num1+num2
//     sumEl.textContent="sum: " +results
// }
// function subtract(){
//     let result=num1-num2
//     sumEl.textContent="sum: " +results
// }
// function divide(){
//     let result=num1/num2
//     sumEl.textContent="sum: " +results
// }
// function multiply(){
//     let result=num1*num2
//     sumEl.textContent="sum: " +results
// }



// let firstCard = 3

// let secondCard = 5

// let sum = firstCard + secondCard

// console.log(sum)

// if(sum < 21){
//     console.log("Would you like to draw again?🤔")
// }else if (sum === 21){
//     console.log("BLACKJACK!🥳")
// }else if (sum > 21) {
//     console.log("sorry,play again?😒")
// }


// set age verification
// let age=21
// if(age <= 20){
//     console.log("you are not old enough to enter club")
// } else{
//     console.log("welcome:")
// }


// let age = 100

// if(age < 100){
//     console.log("sorry, you are not old enough")
// } else if(age === 100) {
//     console.log("congrats here is your card")
// } else { 
//     console.log("you are not eledgible you already have one")
// }

// console.log(4 === 3)
// console.log(5 > 2)
// console.log(12 > 12)
// console.log(3 < 0)
// console.log(3 >= 3)
// console.log(11 <= 11)
// console.log(3 <= 2)

// let thingsLearned = [
//     "Learned how to do html",
//     "Learned hot to construct css",
//     "Now we are learning how to do Java Script"
// ]
// console.log(thingsLearned[1])
// console.log(thingsLearned[2])
// console.log(thingsLearned[0])
// array index always starts at 0

// let kenny = ["Kenny Cooper", 34, true]

// let cards = [7, 4]

// cards.push(6)

// console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)

// console.log(messages)

// messages.pop()

// console.log(messages)


//    Start          FINISH      STEP SIZE
// for (let count = 10; count < 21; count += 1){

//     console.log(count)

// }

// for (let i = 10; i < 101; i += 10){
// console.log(i)
// }

// let cards = [7,3,9]

// for ( let i = 0; i < cards.length;i += 1){
//     console.log(cards[i])
// }
// get rid of the spaces behind each word in the array then add " " example: sentence[i]+ " " to readd the space between words
// let sentence = ["hello ", "my ", "name ", "is ", "Kenny "]
// let greetingEl = Document.getElementById("greeting-el")

// for (let i = 0; i<sentence.length; i+=1){
//     greetingEl.textContent += sentence[i]
// }

//ctrl+d(multiple select)

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if(player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// let randomNumber = Math.random()*6
// console.log(randomNumber)

//what is Math.random() do?
//the Math.random() method returns a random floating point number between 0 (inclusive) and 1 (exclusive).

//0.31942299547341
//MAth.random() and Math.floor() are both case sensitive
// let flooredNumber = Math.floor(Math.random()*6)+1
// console.log(flooredNumber)

// function rollDice(){
//  let randomNumber = Math.floor(Math.random()*6)+1
//     return randomNumber
// }

// let hasCompleteCourse = true
// let giveCertificate = true
// if(hasCompletedCourse === true && giveCertificate === true){
//     generateCertificate()
// }

// function generateCertificate(){
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false
// let hasHintLeft = false

// if(hasSolvedChallenge === false && hasHintLeft === false){showSolution()}

// function showSolution(){
//     console.log("Showing the solution...")
// }

// let likesDocumentaries = true
// let likesStartups = false
// // || is "or"  while && is "and"
// if(likesDocumentaries === true || likesStartups===true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey here is a movie you may like...")
// }

// let airbnb = {
//     isAvailable = true ,
//     name: "Pocono Castle",
//     price: 432,
//     location: ["Stroudsburg", "Pennsylvania"]
// }
// console.log(airbnb.name)
// console.log(airbnb.price)