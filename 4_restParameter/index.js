// rest parameter = (...) => array

function openFridge(...foods) {
	console.log(foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "apple";
const food2 = "apple1";
const food3 = "apple2";
const food4 = "apple3";
const food5 = "apple4";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(total); // 15

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}
;
const totalAverage = getAverage(100, 45, 55 ,70 ,32)
console.log(totalAverage); // 3

function combineStrings(...strings){
    return strings.join(" ");
}


const namaLengkap = combineStrings("Mr.", "spongebob", "squarepants", "III");
console.log(namaLengkap); // mr. spongebob squarepants III