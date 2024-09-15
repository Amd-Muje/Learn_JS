// if statement

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = "You Are Too Old to enter this site";
    
    }
    else if(age == 0){
        resultElement.textContent = "You can't enter. you were just born";
    
    }
    else if(age >= 18){
        resultElement.textContent = "You Are Old Enough To Enter This Site";
    
    }
    else if(age < 0){
        resultElement.textContent = "Your Age can't be below 0";
    
    }
    else{
        resultElement.textContent = "You Must be 18+ to enter this site";
    
    }
}