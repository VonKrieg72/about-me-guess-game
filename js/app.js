'use strict';

alert("Hello");
let userName = prompt("What is your name?")
console.log(userName);
alert("Welcome to my webpage " + userName);

let userAnswer1 = prompt("Was I born and raised in MA? Yes or No?"). toLowerCase();

if (userAnswer1 === 'no'  || userAnswer1 === 'n') {
  alert('That\'s right. You are correct');
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.');
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer2 = prompt("Do I currently live in PA? Yes or No?")

if (userAnswer2 === 'yes'  || userAnswer2 === 'y'){
  alert('That\'s right. You are correct');
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.');
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer3 = prompt("Was I a student at Rutgers University? Yes or No?")

if (userAnswer3 === 'yes'  || userAnswer3 === "y"){
  alert('That\'s right. You are correct');
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.');
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer4 = prompt("Did I earn a bachelors degree in business administration? Yes or No?")

if (userAnswer4 === 'no'  || userAnswer4 === "n"){
  alert('That\'s right. You are correct');
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry, that is NOT correct.')
  //console.log('Sorry, that is NOT correct.');
}

let userAnswer5 = prompt("Do I wish to move to California someday? Yes or No?")

if (userAnswer5 === 'no'  || userAnswer5==="n"){
  alert('That\'s right. You are correct');
  //console.log('That\'s right. You are correct');
} else {
  alert('Sorry that is NOT correct.')
  //console.log('Sorry, that is NOT correct.');
}