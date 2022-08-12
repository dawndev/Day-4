const prompt = require("prompt-sync")();

const usia = parseInt(prompt('Silahkan masukkan Usia mu = '));
const hasil = '';
function CekRatingFilm (hasil){
    if (usia >= 21){
        console.log('Dewasa')
    }else if(usia >= 13){
        console.log('Remaja')
    }else if(usia >= 9){
        console.log('Bimbingan Orang Tua')
    }else if(usia < 9){
        console.log('Semua Usia')
    }
return hasil;
}

CekRatingFilm();