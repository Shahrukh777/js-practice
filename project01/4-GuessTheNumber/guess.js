
const submit = document.querySelector('#subt')

const randomNum = parseInt(Math.round(Math.random() * 100))
console.log(randomNum)
const userGuess = document.querySelector('#guessField')
const previousGusses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORhigh = document.querySelector('.lowORhigh')

const p = document.createElement('p')

let guessArr = []
let totalGusses = 10
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt((userGuess).value)
        // console.log(guess)
        validGuess(guess)
    })
}
function validGuess(guess){
    // if(isNaN(guess)){
    //     alert("Please enter valid number.")
    // } else 
    if(guess < 1 || guess > 100){
        alert("Numbers should be between 1 to 100.")
    } else{
        if(guess == randomNum){
            displayMSG("You Won the game.")
            alert("You win. Refresh to restart.")
            endGame()
        } else if(guess < randomNum){
            displayMSG("Number is too low.")
        } else{
            displayMSG("Number is too high.")
        }
        clean(guess)
    }
}

function clean(guess){
    guessArr.push(guess)
    previousGusses.innerHTML += `${guess}, `
    if(totalGusses == 1){
        totalGusses -= 1
        displayMSG("You Lose.")
        alert("Refresh the page.")
        endGame()
    }else{
        totalGusses -= 1
    }
}
function displayMSG(message){
    lowORhigh.innerHTML = `<h4> ${message} </h4>`
    remaining.innerHTML = totalGusses - 1
}
function endGame(){
    playGame = false
}
function restart(){
    playGame = true
}