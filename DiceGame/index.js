//............WET CODE...........
// Random number Generator between 1 to 6 for left dice
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// // Replace image with corresponding number

// if (randomNumber1 === 1){
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
// console.log(" It's 1");
// }else if(randomNumber1 === 2){
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
// }else if(randomNumber1 === 3){
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
// }else if(randomNumber1 === 4){
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
// }else if(randomNumber1 === 5){
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
// }else{
//     document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
// }

// // Random number Generator between 1 to 6 for left dice
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// // Replace image with corresponding number

// if (randomNumber2 === 1){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
// console.log(" It's 1");
// }else if(randomNumber2=== 2){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
// }else if(randomNumber2 === 3){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
// }else if(randomNumber2 === 4){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
// }else if(randomNumber2 === 5){
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
// }else{
//     document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
// }

// // Compare winner
// if (randomNumber1 === randomNumber2){
// //Change h1 to draw
// document.querySelector("h1").innerHTML = "Draw";

// }else if (randomNumber1 > randomNumber2){
//     //Change h1 to player 1 wins
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins";

// }else{
//      //Change h1 to player 2 wins
//      document.querySelector("h1").innerHTML = "🚩 Play 2 Wins";

// }

//...........DRY CODE..........


// Random number Generator between 1 to 6 for left dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//Image to be replaced
var randomImage = "images/dice" + randomNumber1 + ".png";
//Replacing image
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//Image to be replaced
var randomImage2 = "images/dice" + randomNumber2 + ".png";
//Replacing image
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// Compare winner
if (randomNumber1 === randomNumber2){
//Change h1 to draw
document.querySelector("h1").innerHTML = "🚩 Draw 🚩";

}else if (randomNumber1 > randomNumber2){
    //Change h1 to player 1 wins
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins";

}else{
     //Change h1 to player 2 wins
     document.querySelector("h1").innerHTML = " Play 2 Wins 🚩";

}


