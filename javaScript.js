
// function str(input){
//     count = 0;
//     for(let i=0; i<input.length; i++)
//     {
//         if(input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") { count++ }
//     }
//     return count;
// }

// console.log(str("aeiou"));

// let arr = [88,91,92,83,94,75]

// let newarr = arr.filter((val)=>
// {
//      return  val > 90;    
// });

// console.log(newarr);

// let input = prompt("enter the number");
// let arr = [];

//     for(let i=0; i<= input; i++)
//     {
//         arr[i-1] = i;
//     }

// console.log(arr);

// let sum = arr.reduce((prev,curr) => {
//     return prev+curr; 
// });

// console.log(sum);

// let prod = arr.reduce((prev,curr) =>{

//     return prev * curr;
// });
// console.log(prod);

// let btn = document.querySelector("#btn");
// let state = "light"
// btn.addEventListener("mouseover", () => {
//     if(state === "light")
//     {
//         state = "dark";
//         document.querySelector("body").classList.add("dark");
//         document.querySelector("body").classList.remove("light");
//     }else
//     { 
//         state = "light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//     }
//     console.log(state);
// })

let youChoice = 0;
let compscore = 0;
const choices = document.querySelectorAll(".column");
const msg = document.querySelector("#msg");
const youScore = document.querySelector("#your-score");
const compScore = document.querySelector("#comp-score");

const sysChoice = () => {
    const options = ["rock","paper","scissors"]
    const sysidx = Math.floor(Math.random() * 3);
    return options[sysidx];
};

const drawGame = ()=>{
    msg.innerText = "Game is draw, play again";
    msg.style.backgroundColor = "burlywood";
}

const declareWinner = (youWin, userChoice, compChoice) =>{
    if(youWin){
        youChoice++;
        youScore.innerText = youChoice;
        msg.innerText = `You Won!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compscore++;
        compScore.innerText = compscore;
        msg.innerText = `Computer Won!  ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = sysChoice();
    let youWin = true;
    if(userChoice === compChoice){
        drawGame();
    }else {
        let youWin = true;
    if(userChoice === "rock"){
        youWin = compChoice === "paper" ? false : true;    
    }else if(userChoice === "paper"){
        youWin = compChoice === "rock" ? true : false;    
    }else {
        youWin = compChoice === "rock" ? false : true;    
    }
    declareWinner(youWin, userChoice, compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})







