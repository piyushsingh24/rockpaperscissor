const maindiv = document.querySelector(".main")
const img = document.querySelectorAll(".main div")
const winnerscore = document.querySelector(".winnerscore")
const winnername = document.querySelector(".winnername")
const winneroutput = document.querySelector(".winneroutput")
const newgamebutton = document.querySelector(".newgame")

let userwin = 0, compwin = 0
let obj = {
    0: "rock",
    1: "paper",
    2: "scissor"
}

//<-----------------------MUST READ------------------------------>
//<-----------------------MUST READ------------------------------>

//instead of using multiple function you can use ternary opertor 
//example :-
// if (userChoice === compChoice) {
//      return "DRAW"
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //computer have only two choose left [ paper  , scissor ]
//       userWin = compChoice === "paper" ? false : true;
//if computer choose false user become false
//     } else if (userChoice === "paper") {
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       //rock, paper
//       userWin = compChoice === "rock" ? false : true;
//     }


//for better understand I prefer multiple function based on user input 
//it increase the lenght  of code but easy to understand the specfic function

//<-----------------------MUST READ------------------------------>
//<-----------------------MUST READ------------------------------>

//function first when user input is  rock 
function rockinput(compinput) {

    if (compinput == "paper") {
        winnername.innerHTML = "Computer win"
        winnerscore.innerHTML = `User : ${userwin} | Computer : ${++compwin}`
    }
    else if (compinput == "scissor") {
        winnername.innerHTML = "Computer win"
        winnerscore.innerHTML = `User : ${++userwin} | Computer : ${compwin}`
    }
    else {
        winnername.innerHTML = "Draw"
    }
}

//function first when user input is paper 
function paperinput(compinput) {
    if (compinput == "scissor") {
        winnername.innerHTML = "Computer win"
        winnerscore.innerHTML = `User : ${userwin} | Computer : ${++compwin}`
    }
    else if (compinput == "rock") {
        winnername.innerHTML = "Computer win"
        winnerscore.innerHTML = `User : ${++userwin} | Computer : ${compwin}`
    }
    else {
        winnername.innerHTML = "Draw"
    }
}
//function first when user input is scissor
function scissorinput(compinput) {
    if (compinput == "rock") {
        winnername.innerHTML = "Computer win"
        winnerscore.innerHTML = `User : ${userwin} | Computer : ${++compwin}`
    }
    else if (compinput == "paper") {
        winnername.innerHTML = "Computer win"
        winnerscore.innerHTML = `User : ${++userwin} | Computer : ${compwin}`
    }
    else {
        winnername.innerHTML = "Draw"
    }
}

//winnercheck function in which  we call your all userinput function [ rockinput() scissorinput() paperinput() ]
function winnercheck(userinput) {
    let number = Math.floor(Math.random() * 3)
    let compinput = obj[number]
    winneroutput.innerHTML = `user - ${userinput} : computer - ${compinput}`
    if (userinput == "rock") {
        rockinput(compinput)
    }
    else if (userinput == "paper") {
        paperinput(compinput)
    }
    else {
        scissorinput(compinput)
    }
}

//click eventlistener who take user input 
Array.from(img).forEach((img) => {
    img.addEventListener("click", (() => {
        let userinput = img.id
        winnercheck(userinput)
    }))
})

newgamebutton.addEventListener("click", (() => {
    winnerscore.innerHTML = `User : ${0} | Computer : ${0}`
    winnername.innerHTML = ""
    winneroutput.innerHTML = ""
}))

