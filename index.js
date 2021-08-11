var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelector("img.img1");
var image2 = document.querySelector("img.img2");

image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    document.getElementById("winner").innerHTML = "Player 1 Wins !!";
}
else if (randomNumber1 < randomNumber2){
    document.getElementById("winner").innerHTML = "Player 2 Wins !!";
}
else if (randomNumber1 === randomNumber2){
    document.getElementById("winner").innerHTML = "Draw !!";
}




