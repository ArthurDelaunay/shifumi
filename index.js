// variables
const scissorsButton = document.getElementById("scissorsButton")
const paperButton = document.getElementById("paperButton")
const stoneButton = document.getElementById("stoneButton")
const playerChoice = document.getElementById("playerChoice")
const opponentChoice = document.getElementById("opponentChoice")
const resetButton = document.getElementById("resetButton")
let scoreboardSection = document.getElementById("scoreboardSection")
let scoreboard = document.getElementById("scoreboard")
let playerScore = 0
let opponentScore = 0


// reset
const reset = () => {
    playerScore = 0
    opponentScore = 0
    scissorsButton.addEventListener("click", scissorsPlayerChoice)
    paperButton.addEventListener("click", paperPlayerChoice)
    stoneButton.addEventListener("click", stonePlayerChoice)
    playerChoice.setAttribute("src", "./img/point-dinterrogation.png")
    opponentChoice.setAttribute("src", "./img/point-dinterrogation.png")
    scoreboardSection.innerHTML = `<h2 class="fontSize30">Score</h2>
    <p id="scoreboard" class="fontOverTheRainbow fontSize30">-</p>
    <button id="resetButton" class="fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue display-none">Une autre partie ?</button>`
}

// gestion du bouton de reset
const createResetButton = () => {
    // scoreboardSection.innerHTML = `${scoreboardSection.innerHTML}<button id="resetButton" class="fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue">Une autre partie ?</button>`
    // resetButton.setAttribute("class", "fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue display-yes")
    resetButton.classList.add("test")
    console.log(resetButton.classList)
    // resetButton.style.display = "inline-block"
}

// gestion du score
const addToScore = () => {
    scoreboard.innerHTML = `${playerScore} - ${opponentScore}`
    if (playerScore === 3){
        scoreboardSection.innerHTML = `${scoreboardSection.innerHTML} <p class="fontSize30 fontColorBlue">YOU WON</p>`
        scissorsButton.removeEventListener("click", scissorsPlayerChoice)
        paperButton.removeEventListener("click", paperPlayerChoice)
        stoneButton.removeEventListener("click", stonePlayerChoice)
        // resetButton.getAttribute("class", "fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue display-yes")
        createResetButton()
    }
    else if (opponentScore === 3){
        scoreboardSection.innerHTML = `${scoreboardSection.innerHTML} <p class="fontSize30 fontColorRed">YOU LOST</p>`
        scissorsButton.removeEventListener("click", scissorsPlayerChoice)
        paperButton.removeEventListener("click", paperPlayerChoice)
        stoneButton.removeEventListener("click", stonePlayerChoice)
        // resetButton.getAttribute("class", "fontDoublePica fontSize20 paddingAll10 fontColorDarkBlue display-yes")
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
    whoWin("scissors")
}
const paperPlayerChoice = () => {
    playerChoice.setAttribute("src", "./img/feuille2.svg")
    whoWin("paper")
}
const stonePlayerChoice = () => {
    playerChoice.setAttribute("src", "./img/stone2.svg")
    whoWin("stone")
}




// Shifumi côté joueur 
// Event Listeners / coté joueur
scissorsButton.addEventListener("click", scissorsPlayerChoice)
paperButton.addEventListener("click", paperPlayerChoice)
stoneButton.addEventListener("click", stonePlayerChoice)
resetButton.addEventListener("click", reset)


// pour ajouter image setAttribute
// pour défilement rapide boucle + interval court
