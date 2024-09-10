// how to accept user input

// 1. easy
// 2. professional

let username;

username = window.prompt("What's your username?");

console.log(username);

// professional way



document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello ${username}`;
}