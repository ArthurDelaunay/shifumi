// variables
const scissorsButton = document.getElementById("scissorsButton")
const paperButton = document.getElementById("paperButton")
const stoneButton = document.getElementById("stoneButton")
const playerChoice = document.getElementById("playerChoice")
const opponentChoice = document.getElementById("opponentChoice")
const resetButton = document.getElementById("resetButton")
const drawMessageSection = document.getElementById("drawMessage")
let scoreboardSection = document.getElementById("scoreboardSection")
let scoreboard = document.getElementById("scoreboard")
let playerScore = 0
let opponentScore = 0
let playerStatus = ""
let playerResult = ""
let opponentResult = ""
let round = 1
let draw = 1

// gestion du bouton de reset
const createResetButton = () => {
    resetButton.setAttribute("class", "fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue border borderColorDarkBlue display-block")
}

// gestion du log des rounds
const logRound = () => {
    document.getElementById(`round${round}`).innerHTML = `<h3 class="textAlignCenter fontSize20">Round ${round}</h3>
    <p class="fontSize16">Joueur : ${playerResult}</p>
    <p class="fontSize16">Adversaire : ${opponentResult}</p>
    <p class="fontSize16">Tu as ${playerStatus} le round</p>`
    round += 1
    if (playerScore === 3) {
        scoreboardSection.innerHTML = `${scoreboardSection.innerHTML} <p class="fontSize30 fontColorBlue">YOU WON THE MATCH</p>`
        scissorsButton.removeEventListener("click", scissorsPlayerChoice)
        paperButton.removeEventListener("click", paperPlayerChoice)
        stoneButton.removeEventListener("click", stonePlayerChoice)
        createResetButton()
    }
    else if (opponentScore === 3){
        scoreboardSection.innerHTML = `${scoreboardSection.innerHTML} <p class="fontSize30 fontColorRed">YOU LOST THE MATCH</p>`
        scissorsButton.removeEventListener("click", scissorsPlayerChoice)
        paperButton.removeEventListener("click", paperPlayerChoice)
        stoneButton.removeEventListener("click", stonePlayerChoice)
        createResetButton()
    }
}

// gestion du score
const addToScore = () => {
    scoreboard.innerHTML = `${playerScore} - ${opponentScore}`
    logRound()
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
    opponentResult = automaticShifumi()
    const shifumiValues = ["scissors", "paper", "stone", "scissors"]
    if (playerResult === opponentResult) {
        drawMessages()
    }
    else {
        draw = 0
        const playerResultIndex = shifumiValues.indexOf(playerResult)
        const opponentResultIndex = shifumiValues.indexOf(opponentResult)
        if (shifumiValues[playerResultIndex + 1] === shifumiValues[opponentResultIndex]) {
            playerStatus = "gagné"
            playerWin()
        }
        else {
            playerStatus = "perdu"
            opponentWin()
        }
    }
}
const clearDrawMessages = () => {
    drawMessageSection.innerHTML = ``
}
const drawMessages = () => {
    let textDraw = ``
    if (draw === 3){
        textDraw = `joue mieux sérieux !!`
        draw = 0
    } else {
        textDraw = `Egalité ! Tu peux le faire !`
        draw += 1
    }
    drawMessageSection.innerHTML = `<p class="fontSize30 fontColorViolet">${textDraw}</p>`
    setTimeout(clearDrawMessages, 1200)
}

// Shifumi côté adversaire géré aléatoirement 
const automaticShifumi = () => {
    const Shifumi = ["scissors", "paper", "stone"]
    const min = 0
    const max = 2
    const gap = max - min + 1
    const randomNumber = Math.floor(Math.random()*gap) + min
    if (randomNumber === 0){
        opponentChoice.setAttribute("src", "./img/ciseaux1.svg")
    }
    else if (randomNumber === 1){
        opponentChoice.setAttribute("src", "./img/feuille2.svg")
    }
    else {
        opponentChoice.setAttribute("src", "./img/stone2.svg")
    }
    return Shifumi[randomNumber]
}

// récupération du choix du joueur
const scissorsPlayerChoice = () => { 
    playerChoice.setAttribute("src", "./img/ciseaux1.svg")
    playerResult = "scissors"
    whoWin(playerResult)
}
const paperPlayerChoice = () => {
    playerChoice.setAttribute("src", "./img/feuille2.svg")
    playerResult = "paper"
    whoWin(playerResult)
}
const stonePlayerChoice = () => {
    playerChoice.setAttribute("src", "./img/stone2.svg")
    playerResult = "stone"
    whoWin(playerResult)
}

// Event Listeners / Shifumi coté joueur
scissorsButton.addEventListener("click", scissorsPlayerChoice)
paperButton.addEventListener("click", paperPlayerChoice)
stoneButton.addEventListener("click", stonePlayerChoice)
resetButton.addEventListener("click", reset)
