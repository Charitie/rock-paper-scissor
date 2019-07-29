let  userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".results > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

const getComputerChoice = () => {
    const choices = [ "rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
} 

const wins = (userChoice, computerChoice) => {
    const smallPlayerWord = "player".fontsize(3).sub(); 
    const smallCompWord = "comp".fontsize(3).sub(); 
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallPlayerWord} beats ${computerChoice}${smallCompWord} You win! cheers`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => { userChoice_div.classList.remove("green-glow")}, 300);
}

const lose = (userChoice, computerChoice) => {
    const smallPlayerWord = "player".fontsize(3).sub(); 
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;  
    result_p.innerHTML = `${userChoice}${smallPlayerWord} beaten by ${computerChoice}${smallCompWord} You lost! Ooops`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => { userChoice_div.classList.remove("red-glow")}, 300);
}

const draw = (userChoice, computerChoice) => {
    const smallPlayerWord = "player".fontsize(3).sub(); 
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${userChoice}${smallPlayerWord} draws with ${computerChoice}${smallCompWord} It's a draw! Yeaah`;
    userChoice_div.classList.add("orange-glow");
    setTimeout(() => { userChoice_div.classList.remove("orange-glow")}, 300);

}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            wins(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;
    }

}

const main= () =>  {
    rock_div.addEventListener("click", () => {
    game("rock");
    })

    paper_div.addEventListener("click", () => {
        game("paper")    
    })

    scissor_div.addEventListener("click", () => {
    game("scissor")
    })

} 

main();
