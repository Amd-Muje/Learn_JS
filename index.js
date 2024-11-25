let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Masukkan Username:");
  password = window.prompt("Masukkan Password:");

  if (username === "admin123" && password === "admin123") {
    loggedIn = true;
    console.log("login berhasil");
  } else {
    console.log("Data invalid");
  }
}
