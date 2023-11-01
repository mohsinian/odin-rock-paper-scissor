let computer =0;
let you = 0;

function getComputerChoice () {
    let choices = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function playRound (playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection) document.write("match tied");

    else if(playerSelection==="rock" && computerSelection==="paper")
    {
        document.write("you chose " + playerSelection + " and " + " computer chose " + computerSelection + " Computer won");
        computer++;
    }
    else if(playerSelection==="paper" && computerSelection==="scissor")
    {
        document.write("you chose " + playerSelection + " and " + " computer chose " + computerSelection + " Computer won");
        computer++;
    }
    else if(playerSelection==="scissor" && computerSelection==="rock")
    {
        document.write("you chose " + playerSelection + " and " + " computer chose " + computerSelection + " Computer won");
        computer++;
    }
    else
    {
        document.write("you chose " + playerSelection + " and " + "computer chose " + computerSelection + " You won");
        you++;
    }
    document.write("<br>");
}


function game()
{
    for(let i=0;i<5;i++)
    {
        var cs = getComputerChoice();
        var ps = prompt("what is your move?");
        playRound(ps,cs);
        document.write( "<br>" + "Computer: " + computer + "    " + "You: " +you);
        document.write("<br>");
    }
}


