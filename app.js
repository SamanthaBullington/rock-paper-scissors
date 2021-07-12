let playerChoices = {
  rock: {
    img: 'Assets/rock.jpg'
  },
  paper: {
    img: 'Assets/paper.jpg'
  },
  scissors: {
    img: 'Assets/scissors.jpg'
  },
}


let playerWins = 0
let compWins = 0
let Ties = 0


let opponentChoice = [
  'rock',
  'paper',
  'scissors',
]


function playerChoice(playerInput) {
  let compChoice = opChoice()
  if (playerInput == 'scissors' && compChoice == 'paper' || playerInput == 'paper' && compChoice == 'rock' || playerInput == 'rock' && compChoice == 'scissors') {
    playerWins++
    console.log('Player Wins')
  }
  else if (playerInput == 'scissors' && compChoice == 'rock' || playerInput == 'paper' && compChoice == 'scissors' || playerInput == 'rock' && compChoice == 'paper') {
    compWins++
    console.log('Opponent wins')
  }

}

// function rendImage() {
//   if (playerInput == 'scissors') {

//   }

// }

function opChoice() {
  let randIndex = Math.floor(Math.random() * (opponentChoice.length))
  let compChoice = opponentChoice[randIndex]
  return compChoice
}

function playGame() {
  console.log('work work work')
  document.getElementById("start-game").classList.add("hidden")
}

opChoice()


// function drawButton() {
//   let template = ''
//   for ()

// }

// drawbutton()