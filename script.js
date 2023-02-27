var no1 = Math.floor(Math.random() * 6)+1;
var no2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + no1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

var randomImg2 = "dice" + no2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImg2);

check_winner();


function check_winner(){
    if(no1 > no2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if(no2 > no1){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}



