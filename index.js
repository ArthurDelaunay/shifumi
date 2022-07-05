// gestion du reset
const reset = () => {
    playerScore = 0
    opponentScore = 0
    scoreboardSection.innerHTML = scoreboardSectionDefault.innerHTML

 }

// gestion du bouton de reset
const createResetButton = () => {
    scoreboardSection.innerHTML = `${scoreboardSection.innerHTML}<a href=""><button id="resetButton" class="fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue">Une autre partie ?</button></a>`
}

// gestion du score
const addToScore = () => {
    scoreboard.innerHTML = `${playerScore} - ${opponentScore}`
    if (playerScore === 3){
        scoreboardSection.innerHTML = `${scoreboardSection.innerHTML} <p class="fontSize30 fontColorBlue">YOU WON</p>`
        createResetButton()
    }
    else if (opponentScore === 3){
        scoreboardSection.innerHTML = `${scoreboardSection.innerHTML} <p class="fontSize30 fontColorRed">YOU LOST</p>`
        createResetButton()
    }
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
        finalResult += "draw !" // changer pour afficher un résultat
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
let scoreboardSection = document.getElementById("scoreboardSection")
let scoreboard = document.getElementById("scoreboard")
const scoreboardSectionDefault = scoreboardSection.innerHTML
let playerScore = 0
let opponentScore = 0

// Event Listeners
// Shifumi côté joueur 
scissorsButton.addEventListener("click", scissorsPlayerChoice)
paperButton.addEventListener("click", paperPlayerChoice)
stoneButton.addEventListener("click", stonePlayerChoice)
// resetButton.addEventListener("click", reset)


// pour ajouter image setAttribute
// pour défilement rapide boucle + interval court
