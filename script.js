let player = prompt("Enter your name")
if(player!==""){
    let a = confirm("Hi "+ player+" Are you ready to play")
if(a===true){
    let score_comp = 0
    let score_play = 0
    let score_tie = 0
    i=1
    while(i<6){
        let playerCh = prompt("Choose the options (rock, paper, scissor)").toLowerCase()
        let computer = Math.floor(Math.random()*3+1);
        let computerCh = computer === 1?"rock":computer===2?"paper":"scissor";
        console.log("player choosen: "+playerCh)
        console.log("computer choosen: "+ computerCh)
        
        let result = computerCh === playerCh ? "Tie" :
        (computerCh === "rock" && playerCh === "paper") ||
        (computerCh === "scissor" && playerCh === "rock") ||
        (computerCh === "paper" && playerCh === "scissor") ? "Player Wins" : "Computer Wins";
        console.log(result)
        console.log("---------------------------------------")
        if(result==="Computer Wins"){
            score_comp++;
        }else if(result==="Player Wins"){
            score_play++;
        }else if(result==="Tie"){
            score_tie++;
    }
        i=i+1
    }
    
    
console.log("Game Over")
console.log("---------------------------------------")
console.log("Computer Score:"+ score_comp)
console.log("---------------------------------------")
console.log("Player Score: "+score_play)
console.log("---------------------------------------")
console.log("Tie: "+score_tie)


let wins = score_comp>score_play?"Computer wins":score_comp<score_play?"Player wins":"Draw"
console.log("---------------------------------------")
console.log(wins+ " the game")


cont = confirm("Are you ready to continue ?")
if(cont===true){
    window.location.reload()
}else{
    alert("I think you are not a good mood")
}
}
}else{
    alert("No Enter Your Name, Sorry try again")
    window.location.reload()
}


