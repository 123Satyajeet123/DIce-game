var randomNumber1 = Math.random()*6;
randomNumber1=Math.floor(randomNumber1+1);
var randomDiceImage = "dice"+randomNumber1+".png";
var randomImageSource = "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomnumber2=Math.floor(Math.random()*6 + 1);
var randomImageSource = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);

if(randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomnumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="DRAW"
}