// other latihan Switches

let nilaiUlangan = 70;
let nilaiHuruf;

switch(true){
    case nilaiUlangan >= 90:
        nilaiHuruf = "A";
        break;
    case nilaiUlangan >= 80:
        nilaiHuruf = "B";
        break;
    case nilaiUlangan >= 70:
        nilaiHuruf = "C";
        break;
    default :
        console.log(`${nilaiUlangan} adalah bukan nilai`);
}

console.log(nilaiHuruf);