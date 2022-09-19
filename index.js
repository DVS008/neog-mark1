
var readlinesync = require('readline-sync');
let score = 0;
//
function welcome() {
var userName = readlinesync.question('What is your Name? ');
console.log('\n Welcome', userName ,'to Cricket Quiz, lets begin the quiz');
}
//questions array
var questions = [{ 
question: "When did India won its first world cup? ",
  answer: "1983"
}, 
{question: "who is the captain of Indian cricket team during 1983 world cup? ",
 answer: "Kapil Dev"
},
{question: "who is current test captain of Indian cricket team? ",
  answer: "Rohith Sharma"
},
{question: "Who hit 100 century in cricket? ",
  answer: "Sachin"
},
{question: "Who is England Test Captain? ",
  answer: "Ben Stokes"
}];
function play(question, answer){
  let quiz = readlinesync.question(question)
  if(quiz.toUpperCase() === answer.toUpperCase()){
  console.log('correct!');
  score = score+1;
  }
  else{
    console.log('wrong!');
  score = score-1;
  }
  console.log('Your current score', score);
  console.log('----------');
} 
// game
function game(){
  for(i=0; i<questions.length; i++){
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer) 
  }
}
welcome();
game();
console.log('Thanks for Playing Cricket Quiz. \n Your Final Score is', score);
