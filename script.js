let computer =0;
let you = 0;
const body = document.querySelector("body");
const newDiv = document.createElement('div');
body.append(newDiv);
let flag = true;
const score = document.createElement('p');
newDiv.append(score);
const allButton = document.querySelectorAll("input");
allButton.forEach(button => {
    button.addEventListener('click',()=>{
        var cs = getComputerChoice();
        var ps = button.value;
        let para = document.createElement('p');
        if(flag) playRound(ps,cs,para);
        if(flag) score.innerText = "you: " + you + " and " + "Computer: "+computer;
        newDiv.append(para);
        if(computer===5 && flag) {
            para.innerText = "Computer won, reload to play again!"
            flag = false;
            newDiv.append(para);
        }
        if(you===5 && flag)
        {
            para.innerText = "you won, reload to play again!";
            flag = false;
            newDiv.append(para);
        }
        
    })
})

function getComputerChoice () {
    let choices = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function playRound (playerSelection,computerSelection,para) {
    


    if(playerSelection===computerSelection) para.innerText = "match tied";

    else if(playerSelection==="rock" && computerSelection==="paper")
    {
        para.innerText = "you chose " + playerSelection + " and " + " computer chose " + computerSelection + " Computer won";
        computer++;
    }
    else if(playerSelection==="paper" && computerSelection==="scissor")
    {
        para.innerText = "you chose " + playerSelection + " and " + " computer chose " + computerSelection + " Computer won";
        computer++;
    }
    else if(playerSelection==="scissor" && computerSelection==="rock")
    {
        para.innerText = "you chose " + playerSelection + " and " + " computer chose " + computerSelection + " Computer won";
        computer++;
    }
    else
    {
        para.innerText = "you chose " + playerSelection + " and " + "computer chose " + computerSelection + " You won";
        you++;
    }
    
}


