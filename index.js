// logical operators = used to determine the logic between variables or values

// && = and
// || = or
// ! = not

const temp = 30;

if(temp > 0 && temp < 30) {
    console.log("the temperature is above freezing");
}
else if (temp <= 30) {
    console.log("the temperature is good");
}
else {
    console.log("the temperature is bad");
}

const isSunny = false;

if(!isSunny) {
    console.log("It's sunny outside");
}
else {
    console.log("It's not sunny outside");
}