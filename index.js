var randomNumber1 = Math.floor(6 * Math.random() + 1);//1-6
var diceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png
var newImage1 = "images/" + diceImage1; //images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", newImage1);
var randomNumber2 = Math.floor(6 * Math.random() + 1);//1-6
var diceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png-dice6.png
var newImage2 = "images/" + diceImage2; //images/dice1.png-images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", newImage2);
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins🚩!";
}
if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
