// VARIABLES
// =================================================================

// Crystals
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  white:
  {
    name: "White",
    value: 0
  },
  purple:
  {
    name: "Purple",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// Scores (Current and Winning)
var currentScore = 0;
var winningScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Start Game 
var startGame = function() {
  currentScore = 0;
  winningScore = getRandom(19, 120);

  crystal.blue.value = getRandom(1, 12);
  crystal.white.value = getRandom(1, 12);
  crystal.purple.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  $("#player-score").text(currentScore);
  $("#winning-score").text(winningScore);


  console.log("-----------------------------------");
  console.log("Winning Score: " + winningScore);
  console.log("Blue: " + crystal.blue.value + " | White: " + crystal.white.value + " | Purple: " + crystal.purple.value +
    " | Yellow: " + crystal.yellow.value);
  console.log("-----------------------------------");
};

// Did player win or lose
var checkWin = function() {

  // If currentScore > winningScore
  if (currentScore > winningScore) {
    alert("Ouch. You lost!");
    console.log("You Lost");

    lossCount++;
    $("#loss-count").text(lossCount);

    startGame();
  }

  else if (currentScore === winningScore) {
    alert("Big Deal! You Won!");
    console.log("You Won!");
    winCount++;
    $("#win-count").text(winCount);

    
    startGame();
  }

};

// Clicking the Crystal
var addValues = function(clickedCrystal) {

  currentScore += clickedCrystal.value;
  $("#player-score").text(currentScore);

  checkWin();

  console.log("Player Score: " + currentScore);
};



// Starts the Game
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#white").click(function() {
  addValues(crystal.white);
});

$("#purple").click(function() {
  addValues(crystal.purple);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
