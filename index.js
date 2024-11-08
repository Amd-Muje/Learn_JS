const fullname = "Ahmad Mujahid";

// let firstName = fullname.slice(0, 5);
// let lastName = fullname.slice(6, 13);


let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


