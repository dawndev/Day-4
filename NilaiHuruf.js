const prompt = require("prompt-sync")();

const Nilai = parseInt(prompt('Silahkan masukkan nilai angka = '));
const hasil = '';
function NilaiHuruf (hasil){
    if (Nilai >= 90 ){
        console.log('A')
    }else if(Nilai >= 80 && Nilai <=89){
        console.log('B')
    }else if(Nilai >= 70 && Nilai <=79){
        console.log('C')
    }else if(Nilai >= 60 && Nilai <=69){
        console.log('D')
    }else {
        console.log('E')
    }
return hasil;
}

NilaiHuruf();