const readlineSync = require('readline-sync')
const chalk = require('chalk');

let userScore = 0;
let highScores = [{
  name: 'thor',
  score: 4
},
{
  name: 'steve',
  score: 4
},
{
  name: 'bucky',
  score: 3
}
]

let questionSet = [{ question: "What is Batman's butler name?", answer: "Alfred",options:["Alfred","Tim","Gordon"] },
{ question: "What is the name of mental asylum in Gotham?", answer: "Arkham",options:["Metropolis","Phantomzone","Arkham"] },
{ question: "What is Bruce's father's first name?", answer: "Thomas",options:["Jonathan","Thomas","Bart"] },
{ question: "What is Clark Kent's middle name", answer: "Joseph",options:["Thomas","Kal-el","Joseph"] },
{ question: "What member of the Superman family died in Crisis on Infinite Earths", answer: "Supergirl",options:["Lex","Jimmy","Supergirl"] },
{ question: "What was the name of Superman's birth mother?", answer: "Lara",options:["Lara","Lois","Martha"] }]

function welcomeUser() {
  let userName = readlineSync.question(chalk.blue.bold("What's your name?"))
  console.log(chalk.blue.bold.underline("Welcome %s to DC quiz???"),userName)
  return userName;
}

function ask(ques, ans,options) {
 let userAnsIndex = readlineSync.keyInSelect(options, 'Which animal?');

  if (options[userAnsIndex]=== ans ){
    console.log(chalk.greenBright("Woahh Right answer !!"));
    userScore++
  } else {
    console.log(chalk.redBright("Uhhh Wrong Answer"))
  }
  console.log(chalk.magentaBright.bold("Your Score is %s"), userScore);
  console.log("----------------------------------")
  console.log("                                   ")
}


function playGame() {
  questionSet.forEach((ques)=>{
    ask(ques.question,ques.answer,ques.options)
  })
}

function showScores() {
  console.log("congrats you scored a total of ",userScore);
  console.log("If you think you should be there send me a screenshot I'll take care of it");

  let highestScore = userScore


  highScores.map(scorer => {console.log(scorer.name, " : ", scorer.score)
  
  highestScore = userScore > scorer.score ?userScore :scorer.score
  })

  if(highestScore ===userScore){
    console.log(chalk.greenBright.bgWhiteBright.underline("you just created a new highScore"));
  }

}

let userName = welcomeUser();
playGame();
showScores();

console.log("Thank you for trying this ", userName)