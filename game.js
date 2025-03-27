var noOfLives=document.getElementById("livesNo");
var msg=document.getElementById("message");

var submit=document.getElementById("submit");

var randomNumber=Math.round(Math.random()*100);

var lives=5;
submit.onclick=()=>{
    var userinput=document.getElementById("number").value;
    lives--;
    if(userinput==randomNumber)
        location.href="win.html";
    else if(lives==0)
        location.href="loose.html";
    else if()
}