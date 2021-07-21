function playGame(){
    var grid = document.querySelectorAll('.block');
var hitPosition;
var score = 0; 
var pointGainedOnce=0;
var gameSpeed = 750;

//timer
var timer__html = document.querySelector('#timer');
var timeLeft = document.querySelector('#dur__drop').value;
gameSpeed = document.querySelector('#gameSpeed').value;

var timerID = setInterval(function(){
    if (timeLeft<1) {
        clearInterval(timerID);
        gameStatus="stale";
        document.querySelector('#play__text').textContent='Play Again';
        startButton.style.background='#27ae60';    
        startButton.style.fontWeight='Initial'; 
        //modal-- game over
        modal.style.display = "block";
        document.querySelector('#modal--score').textContent=score;
        document.querySelector('#dur__drop').disabled=false;
        document.querySelector('#gameSpeed').disabled=false;
        document.querySelector('.box').style.cursor='pointer';
        document.querySelector('#gameSpeed').style.cursor='pointer';
        document.querySelector('.duration').style.cursor='pointer';
        document.querySelector('#dur__drop').style.cursor='pointer';
    }

    timer__html.textContent=timeLeft;
    timeLeft--;
 }, 1000);

//game

function popTom(randomBLockNo){
    
    grid[randomBLockNo].classList.add("tom");
}

function removeTom(){
    grid.forEach(element => {
        element.classList.remove("tom");
    });
}

grid.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.id == hitPosition+1 && timeLeft > 0 && pointGainedOnce){
            score++;
            document.querySelector('#score__text').textContent = score; 
            pointGainedOnce=0;           
        }
    })
});




var tomTimer = setInterval(() => {
    if (timeLeft < 1) {
        clearInterval(tomTimer)
    }
    removeTom();
    let randomBLockNo = Math.floor((Math.random())*16);
    hitPosition = randomBLockNo;
    popTom(randomBLockNo);
    pointGainedOnce=1;
}, gameSpeed);

}


var startButton = document.querySelector('#play');
var gameStatus = "stale";


startButton.addEventListener('click',()=>{
    if (gameStatus == "stale") {
        playGame();
        document.querySelector('#score__text').textContent='0';
        document.querySelector('#dur__drop').disabled=true;
        document.querySelector('#gameSpeed').disabled=true;
        document.querySelector('.box').style.cursor='auto';
        document.querySelector('#gameSpeed').style.cursor='auto';
        document.querySelector('.duration').style.cursor='auto';
        document.querySelector('#dur__drop').style.cursor='auto';
        gameStatus='Running';
        startButton.style.background='#2980b9';     
        document.querySelector('#play__text').textContent='Game is ON!!'; 
    }   

})


//modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
