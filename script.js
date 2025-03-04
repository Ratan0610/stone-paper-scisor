let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice =()=>{
    const option =["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];

};

const drawgame=()=>{
    msg.innerText="Game is Draw. Play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner =(userWin, userChoice, compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win  Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose  ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame =(userChoice)=>{
    const compchoice=gencompchoice();
    if(userChoice==compchoice){
        drawgame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=compchoice==="scissor"? false:true;
        }else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin ,userChoice,compchoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{ 
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);

    });
});
