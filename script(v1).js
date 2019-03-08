let userCount = 0;
let compCount = 0;
var options = [...document.querySelectorAll('.RPS-btn')];
console.log(options);

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
    var heading = document.querySelector('.option');
    var userScore = document.querySelector('.p1score');
    var compScore = document.querySelector('.p2score');


    if(userSelection !== 'rock' &&
    userSelection !== 'paper' &&
    userSelection !== 'scissors'){
    } else if (userSelection === compSelect){
        heading.textContent = "You draw";
        compScore.textContent = compCount;
        userScore.textContent = userCount
    } else {
        if(userSelection === 'paper' && compSelect === 'scissors' || userSelection === 'rock' && compSelect === 'paper' || userSelection === 'scissors' && compSelect === 'rock'){
            heading.textContent = `You selected ${userSelection} and your opponent selected ${compSelect}, you lose!`;
            compCount++;
            compScore.textContent = compCount;
            userScore.textContent = userCount
        } else {
            heading.textContent = `You selected ${userSelection} and your opponent selected ${compSelect}, you win!`;
            userCount++;
            compScore.textContent = compCount;
            userScore.textContent = userCount
        }
    }
};



function startGame(){
    if(userCount === 5){
        heading.textContent = `The score is user : ${userCount} - ${compCount} : comp, you won the match!`;
        userCount = 0;
        compCount = 0;
        compScore.textContent = compCount;
        userScore.textContent = userCount
        return;
    } else if(compCount === 5){
        heading.textContent = `The score is user : ${userCount} - ${compCount} : comp, you lost the match!`
        userCount = 0;
        compCount = 0;
        compScore.textContent = compCount;
        userScore.textContent = userCount
        return;
    }
}

options.forEach(button => button.addEventListener('click', function(){
    console.log(this.id);
    playRound(this.id, computerPlay());
    startGame();
}))



