document.querySelector('.btn').addEventListener('click', startGame);
let userCount = 0;
let compCount = 0;

function computerPlay(){
    let num = Math.ceil(Math.random() * 3);
    if(num === 1){
        return 'Rock'
    } else if(num === 2){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

computerPlay();

function playRound(userSelection, computerSelection){
    var compSelect = computerSelection.toLowerCase();
    var userSelect = userSelection.toLowerCase();

    if(userSelect !== 'rock' &&
    userSelect !== 'paper' &&
    userSelect !== 'scissors'){
        document.write('Please enter a valid option, Rock, Paper or Scissors');
    } else if (userSelect === compSelect){
        console.log("You draw");
        console.log(`Comp: ${compCount} - ${userCount} : User`)
        startGame();

    } else {
        if(userSelect === 'paper' && compSelect === 'scissors' || userSelect === 'rock' && compSelect === 'paper' || userSelect === 'scissors' && compSelect === 'rock'){
            console.log(`You selected ${userSelect} and your opponent selected ${compSelect}, you lose!`);
            compCount++;
            console.log(`Comp: ${compCount} - ${userCount} : User`)
            startGame();
        } else {
            console.log(`You selected ${userSelect} and your opponent selected ${compSelect}, you win!`);
            userCount++;
            console.log(`Comp: ${compCount} - ${userCount} : User`)
            startGame();
        }
    }
};



function startGame(){
    if(userCount === 5){
        console.log(`The score is user : ${userCount} - ${compCount} : comp, you won the match!`)
        userCount = 0;
        compCount = 0;
        return;
    } else if(compCount === 5){
        console.log(`The score is user : ${userCount} - ${compCount} : comp, you lost the match!`)
        userCount = 0;
        compCount = 0;
        return;
    }

    playRound(prompt('Rock, Paper or Scissors?'), computerPlay());
}