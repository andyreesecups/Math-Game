var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
//if we are playing
if(playing == true){
    
    location.reload(); //reload page

}else{//if we are not playing
    
    //change mode to playing
    playing = true;
    score = 0;//set score to 0

document.getElementById("scorevalue").innerHTML = score;
    
    //show countdown box
    show("timeremaining");
    timeremaining = 60;

document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    
    //hide game over box
    hide("gameOver");
//change button to reset    
document.getElementById("startreset").innerHTML = "Reset Game"; 
    
    //start countdown
    startCountdown();
    
    generateQA();//generate a new Q&A
    
    }
    
}
//clicking on an answer box
for(i=1; i<5; i++){
document.getElementById("box"+i).onclick = function(){//check if we are playing
    
    if(playing== true){//yes
    if(this.innerHTML == correctAnswer){
         //correct answer
        
          score++;//increase score by 1
        
document.getElementById("scorevalue").innerHTML = score;
    //hide wrong box and show correct box
          hide("wrong");
          show("correct");
          setTimeout(function(){
          hide("correct");
          }, 1000);
        
          //generate new Q&A
          generateQA();
          
      }else{// wrong answer          
          hide("correct");
          show("wrong");
          setTimeout(function(){
          hide("wrong");
          }, 1000);
       
      } 
    }
}
}
// start counter
function startCountdown(){
action = setInterval(function(){
        timeremaining -= 1;
        
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        if(timeremaining == 0){
            stopCountdown();
            show("gameOver");
            
document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
            
        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing = false;
            
document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}
//stop counter
function stopCountdown(){
    clearInterval(action);
}

//hide an element
function hide(Id){
    
document.getElementById(Id).style.display ="none";
}

function show(Id){//show an element
document.getElementById(Id).style.display = "block";
}
// generate question and multiple answers
function generateQA(){
   var x = 1+ Math.round(9*Math.random()); 
   var y = 1+ Math.round(9*Math.random());
   correctAnswer = x*y;
    
document.getElementById("question").innerHTML = x + "x" + y;
    
    var correctPosition = 1+ Math.round(3*Math.random());
    
//fill one box with correct answer    
document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
//fill other boxes with wrong answers    
var answers = [correctAnswer];
    
for(i=1; i<5; i++){
    if(i != correctPosition){
        var wrongAnswer;
        do{
            wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
            
        }while(answers.indexOf(wrongAnswer)>-1)
            
        
document.getElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
    }
}
    
}

    
    