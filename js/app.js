'use strict';

let score = 0 

alert("Hello");
let userName = prompt("What is your name?")
console.log(userName);
alert("Welcome to my webpage " + userName);

let userAnswer1 = prompt("Was I born and raised in MA? Yes or No?"). toLowerCase();

if (userAnswer1 === 'no'  || userAnswer1 === 'n') {
  alert('That\'s right. You are correct');
  score++
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.');
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer2 = prompt("Do I currently live in PA? Yes or No?")

if (userAnswer2 === 'yes'  || userAnswer2 === 'y'){
  alert('That\'s right. You are correct');
  score++
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.');
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer3 = prompt("Was I a student at Rutgers University? Yes or No?")

if (userAnswer3 === 'yes'  || userAnswer3 === "y"){
  alert('That\'s right. You are correct');
  score++
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.');
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer4 = prompt("Did I earn a bachelors degree in business administration? Yes or No?")

if (userAnswer4 === 'no'  || userAnswer4 === "n"){
  alert('That\'s right. You are correct');
  score++
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.')
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer5 = prompt("Do I wish to move to California someday? Yes or No?")

if (userAnswer5 === 'no'  || userAnswer5==="n"){
  alert('That\'s right. You are correct');
  score = score + 1
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry that is NOT correct.')
  //console.log('Sorry, that is NOT correct.');
}

// let userAnswer6 = prompt('Please Guess my favorite number between 1 and 50');
let isCorrect = false;
function userGuessingGame() {
  console.log("here")
  let correctAnswer = 45;
  let userAttempts = 4;
  console.log(userAttempts)
  for(let i = 1; i <= userAttempts; i++){
    
    let userAnswer = prompt('Please guess my favorite number between 1 and 50');
    let userAnswerNum = parseInt(userAnswer)
    console.log(userAttempts, userAnswerNum, correctAnswer)
    // let userAnswer = prompt('Wrong Range.  Please enter a number between 1 and 50'); 
    // while(userAnswer6 <= correctAnswer || userAnswer6 >= correctAnswer){
    
    if (userAnswerNum === correctAnswer){
      alert('You are correct, it\'s 45.')
      score++
      isCorrect = true;
    break;
    }else if(i === 4 && userAnswerNum !== correctAnswer){
      // alert("bang")
      break
    } else if(userAnswerNum < correctAnswer){
      alert('Too low.  Try again.')
      // userAnswer = prompt('Please guess my favorite number between 1 and 50');
    } else if (userAnswerNum > correctAnswer){
      alert('Too high.  Try again.')
      // userAnswer = prompt('Please guess my favorite number between 1 and 50');
    
    } else {
      alert('Something else went wrong');
    }
    
    
      
    
  }
  if (isCorrect === false){ 
    alert('Sorry you did\'nt answer correctly.  The correct answer is: ' + correctAnswer);

  }
}
userGuessingGame()
isCorrect = false;
let possibleAnswerSeven = ['Antarctica', 'North Korea', 'Serengeti National Park', 'Mongolia', 'Iran', 'Kazakhstan', 'United Kingdom', 'Japan', 'Germany', 'Yellowstone National Park'];
function userSeven(){

let userAttemptSeven = 6;
while(userAttemptSeven && !isCorrect){
let userAnswerSeven = prompt('Guess one location that I would like to visit someday').toLowerCase();  
  for(let i = 0; i < possibleAnswerSeven.length; i++){
  if (userAnswerSeven === possibleAnswerSeven[i].toLowerCase()){
    alert('You are correct');
    score++;
    isCorrect = true;
    break;
  } 
}

userAttemptSeven--;
 if(isCorrect === false) {
   alert(`That is not correct, you have ${userAttemptSeven} attempts remaining`);
  
} 
}
}
userSeven()



if(isCorrect === false){
  let correctAnswerSeven= alert(`These are the possible answers ${possibleAnswerSeven}`);
}
alert(`You scored ${score} out of 7`);
  





// let attemptsRemaining = 6;
// let travelDest = ['Antarctica', 'North Korea', 'Serengeti National Park', 'Mongolia', 'Iran', 'Kazakhstan', 'United Kingdom', 'Japan', 'Germany', 'Yellow Stone National Park']
// let userResponse 