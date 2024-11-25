

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a number");
    }
    else if ( guess < minNum || guess > maxNum) { 
        window.alert(`Please enter a valid number`);
    }
    else {
        attempts;
        if(guess < answer) {
            window.alert("Too low, try again");
        }
        else if (guess > answer) {
            window.alert("Too high, try again");
        }
        else {
            window.alert(`Congratulation! You've guessed the number is ${answer} in ${attempts} attempts`);
            running = false;
        }
    }

}



console.log(answer);
