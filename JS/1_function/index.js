
function add(x,y){
    let result = x + y;
    console.log(result);
} 

function subtract(x,y){
    return x - y;
}

console.log(add(2,5));
console.log(subtract(2,5));

function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function isValidEmail(email){

    return email.includes('@') ? true : false;
}

console.log(isEven(2));
console.log(isValidEmail("wow@gmail.com"));