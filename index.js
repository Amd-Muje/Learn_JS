// const fullname = "Ahmad Mujahid";

// // let firstName = fullname.slice(0, 5);
// // let lastName = fullname.slice(6, 13);


// let firstName = fullname.slice(0, fullname.indexOf(" "));
// let lastName = fullname.slice(fullname.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

const email = "Keren@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);