const prompt = require("prompt-sync")();
const Tahun = prompt('Masukkan Tahun : ');
const Kabisat = new Date(Tahun, 1, 29).getDate() === 29;
var Hasil = '';
function CekKabisat(Hasil) {

    if (Kabisat) {
        console.log(Tahun + ' Tahun kabisat');
    } else {
        console.log(Tahun + ' Bukan kabisat');
    }
    return Hasil;
}

CekKabisat();