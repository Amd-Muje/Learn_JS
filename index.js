// // string methods

// let username = " AhmadMujahid   ";

// console.log(username.charAt(2)); // melihat char apa di index tertentu

// console.log(username.indexOf("A"));

// console.log(username.length); // melihat panjang string

// username = username.trim(); // untuk memotong white Space => spasi yang tidak jelas awal dan akhir
// username = username.toUpperCase(); // 
// username = username.toLowerCase(); // 

// console.log(username);

// console.log(username.repeat(3)); // untuk mengulangi string sebanyak 3 kali

// let result = username.startsWith(" "); // untuk mengetahui true or false dari parameter yang diberikan

// if (result) {
//     console.log("Your Username can't begin with ' '");
// } else {
//     console.log(username);
// }

let phoneNumber = "0812-3456-7890"

phoneNumber = phoneNumber.replaceAll("-","+");

console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(30,"-");

console.log(phoneNumber);