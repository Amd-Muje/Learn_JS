let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers); 
let minimum = Math.min(...numbers);


console.log(numbers);
console.log(maximum); // NaN because Math.max expects a list of numbers, not an array
console.log(minimum); // 1 because the spread operator converts the array into a list of numbers

let username = "Sun Go Kong"
let huruf = [...username].join("-");
console.log(huruf); // ['S', 'u', 'n', ' ', 'G', 'o', ' ', 'K', 'o', 'n', 'g']

let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrot", "broccoli", "spinach"];
let newFruits = [...fruits];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; // ['apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach']

console.log(newFruits);
console.log(fruits);
console.log(foods); // ['apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach']