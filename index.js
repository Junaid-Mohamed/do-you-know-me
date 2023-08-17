// import the readlinesync for reading/taking i/p

var readlineSync = require("readline-sync");

var score = 0;

// high score array

var highScores = [
  {
    name: "Suhail",
    score: 4,
  },
  {
    name: "Shab",
    score: 3,
  },
];

// question answer array
var questions = [
  {
    question: "Where do Junaid live ?\n",
    answer: "Bangalore",
  },
  {
    question: "Which college did Junaid graduate from ?\n",
    answer: "Dayananda Sagar",
  },
  {
    question: "Which year did Junaid got graduated ?\n",
    answer: "2020",
  },
  {
    question: "Where is Junaid Working currently ?\n",
    answer: "Accenture",
  },
  {
    question: "Which is Junaid's fav game ?\n",
    answer: "Chess",
  },
];

// welcome function
function welcome() {
  // take username using readlineSync
  var userName = readlineSync.question("What is your name?");

  console.log(
    "Welcome " +
      userName +
      " \nLet's play a small game of How well you know Junaid"
  );
}

// play function
function play(que, ans) {
  // ask que for the user
  var userAns = readlineSync.question(que);
  if (userAns.toLowerCase() === ans.toLowerCase()) {
    console.log("Right !");
    score += 1;
  } else {
    console.log("Wrong!");
  }

  console.log("Current Score: " + score);
  console.log("--------------------------------------");
}

// game function
function game() {
  questions.forEach((i) => play(i.question, i.answer));
}

// show score function
function showScores() {
  console.log(
    "YAY!.... You scored ",
    score +
      "\nCheck out the current high scores, If yours is highest ping me I'll update it."
  );

  highScores.forEach((i) => console.log(i.name, ":", i.score));
}

// call the functions
welcome();
game();
showScores();
