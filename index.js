// gestion du score
const addToScore = () => {
    scoreboard.innerHTML = `${playerScore} - ${opponentScore}`
}
const playerWin = () => {
    playerScore += 1
    addToScore()
}
const opponentWin = () => {
    opponentScore += 1
    addToScore()
}

// gestion de qui gagne la manche
const whoWin = (playerResult) => {
    const opponentResult = automaticShifumi()
    const shifumiValues = ["scissors", "paper", "stone", "scissors"]
    let finalResult = ""
    if (playerResult === opponentResult) {
        finalResult += "draw !"
    }
    else {
        const playerResultIndex = shifumiValues.indexOf(playerResult)
        const opponentResultIndex = shifumiValues.indexOf(opponentResult)
        if (shifumiValues[playerResultIndex + 1] === shifumiValues[opponentResultIndex]) {
            // finalResult += `vous avez gagné avec ${playerResult}`
            playerWin()
        }
        else {
            // finalResult += `l'adversaire a gagné avec ${opponentResult}`
            opponentWin()
        }
    }
    console.log(finalResult) 
}

// Shifumi côté adversaire géré aléatoirement 
const automaticShifumi = () => {
    const Shifumi = ["scissors", "paper", "stone"]
    const min = 0
    const max = 2
    const gap = max - min + 1
    const randomNumber = Math.floor(Math.random()*gap) + min
    return Shifumi[randomNumber]
}
// récupération du choix du joueur
const scissorsPlayerChoice = () => { 
    whoWin("scissors")
}
const paperPlayerChoice = () => {
    whoWin("paper")
}
const stonePlayerChoice = () => {
    whoWin("stone")
}

const scissorsButton = document.getElementById("scissorsButton")
const paperButton = document.getElementById("paperButton")
const stoneButton = document.getElementById("stoneButton")
let scoreboard = document.getElementById("scoreboard")
let playerScore = 0
let opponentScore = 0

// Event Listeners
// Shifumi côté joueur 
scissorsButton.addEventListener("click", scissorsPlayerChoice)
paperButton.addEventListener("click", paperPlayerChoice)
stoneButton.addEventListener("click", stonePlayerChoice)


// pour ajouter image setAttribute
// pour défilement rapide boucle + interval court
