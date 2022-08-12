const prompt = require("prompt-sync")();
const Angka = prompt("Masukkan Angka: ");
var hasil = '';
function GanjilGenap(hasil){
    if(Angka % 2 == 0) {
        console.log("Angka Genap");
    }
    else {
        console.log("Angka Ganjil");
    }
    return hasil;
}

GanjilGenap();