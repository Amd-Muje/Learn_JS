// checked = property yang menentukan state dari checkbox di html
//          atau radio button.

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardlBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if(myCheckBox.checked){
        subResult.textContent = `You Are Subscribed!`;
    }
    else {
        subResult.textContent = `You Are NOT Subscribed! yet`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You Are Paying With Visa!`;
    }
    else if(mastercardlBtn.checked){
        paymentResult.textContent = `You Are Paying With MasterCard!`;
    } 
    else if(paypalBtn.checked) {
        paymentResult.textContent = `you are paying with Paypal!`;''
    }
    else {
        paymentResult.textContent = `you aren't select any payment type!!`
    }
}