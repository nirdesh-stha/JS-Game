let playerscore=0;
let computerscore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencomchoice= () => {
    const op=["rock", "paper", "scissor"];
    const ran=Math.floor(Math.random()*3);
    return op[ran];
}

const draw = () => {
    console.log("the game is draw");
    msg.innerText = "The game is draw";
    msg.style.backgroundColor = "yellow";
}

const playgame = (userchoice) => {
    console.log("userchoice=",userchoice);
    // to generate computer choice
    const computer=gencomchoice();
    console.log("comchoices=",computer);

    const showinner= (userwin, userchoice, computer) => {
        if(userwin){
            console.log("you win");
            msg.innerText = `You win Your ${userchoice} beats ${computer}`;
            msg.style.backgroundColor = "green";
        }
        else{
            console.log("you lose");
            msg.innerText = `You Lose ${computer} beats Your ${userchoice}`;
            msg.style.backgroundColor = "red";
        }
    };

if(userchoice === computer){
    draw();
    }
    else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin = computer === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = computer === "scissors" ? false : true;
        }
        else{
            userwin = computer === "rock" ? false : true;
        }
        showinner(userwin, userchoice, computer);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});
