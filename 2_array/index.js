let fruits = ["apple", "banana", "cherry"];

fruits.push("orange"); // Add "orange" to the end of the array
fruits.unshift("mango"); // Add "mango" to the beginning of the array
// fruits.shift(); // Remove the first element ("mango")


console.log(fruits);

// console.log(fruits[0]); // apple
// console.log(fruits[1]); // banana
// console.log(fruits[2]);
// console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("banana"); // Get the number of elements in the array
console.log(index); // 4

for(i=0 ; i< fruits.length; i++){
    console.log(fruits[i]);
    
}
console.log(Math.floor(Math.random(index)*10)+1); // 4

fruits.sort().reverse(); // Sort the array in reverse order
// fruits.sort();

for (let buah of fruits) {
    console.log(buah);
}