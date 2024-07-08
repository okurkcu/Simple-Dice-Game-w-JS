let randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImageSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSrc);

let randomnumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImg1 = "images/dice" + randomnumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceImg1);

if(randomNumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if (randomNumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}

else{
    document.querySelector("h1").innerHTML = "It's Draw!!";
}