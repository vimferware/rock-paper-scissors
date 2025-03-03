//User Input
const userInput = input => {
    let inputResult = input.toLowerCase();
    if (inputResult === 'rock' || inputResult === 'scissors' || inputResult === 'paper') {
        return inputResult;
    } else {
        console.log('Error');
    }
}

//computer Input


function computerChoice() {

    let math = Math.floor(Math.random() * 3);

    if (math === 0) {
        return 'rock';
    } else if (math === 1) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

computerChoice();

//compare

function myComparison(userChoice, secondChoice) {

    if (userChoice === secondChoice) {
        return 'Its a tie!'
    }

    if (userChoice === 'rock') {
        if (secondChoice === 'paper') {
            return 'Computer wins';
        } else {
            return 'You win';
        }
    }

    if (userChoice === 'paper') {
        if (secondChoice === 'scissors') {
            return 'Computer wins';
        } else {
            return 'You win';
        }
    }

    if (userChoice === 'scissors') {
        if (secondChoice === 'rock') {
            return 'Computer wins';
        } else {
            return 'You win';
        }
    } 
}


//Results

function results () {

    let user1 = userInput('rock');
    let cpu1 = computerChoice();

    console.log('User picked ' + user1)
    console.log( 'Computer picked ' + cpu1)
    let finalResults = myComparison(user1, cpu1)
    return finalResults;
}

console.log(results());