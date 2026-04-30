<<<<<<< HEAD
function kuadratBiasa(x) {
    return x * x;
}

const kuadrat = (x) => {
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== perbandingan penulisan ===');
console.log('Biasa    :', kuadratBiasa(5));
console.log('Arrow    :', kuadrat(5));
console.log('Ringkas  :', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam =(nama, waktu) => `selamat ${waktu}, ${nama}!`;

console.log('luas 4x6  :', luas(4, 6));
console.log(salam('Budi', 'pagi'));

function lakukanOperasi(angka, operasicallback) {
    console.log(`angka awal: ${angka}`);
    const hasil = operasicallback(angka);
    console.log(`hasil setelah operasi: ${hasil}`);
}

console.log('\n=== callback ===');
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x) {
    return x / 2;
});

console.log('\n=== setTimeout (callback) ===');
console.log('pesan 1: sebelum timer');

setTimeout(() => {
    console.log('pesan 3: ini dari dalam setTimout (setelah 1 detik');
}, 1000);

console.log('pesan 2: setelah mendaftarkan timer');


const keHurufBesar = (teks) => {
    return teks.toUpperCase();
};

const tambahSeru = (teks) => {
    return teks + '!!!';
};

const hitungKata = (teks) => {
    return teks.split(' ').length;
};

function prosesKalimat(kalimat, callback) {
    console.log(`\nKalimat awal: ${kalimat}`);
    const hasil = callback(kalimat);
    console.log(`Hasil setelah proses: ${hasil}`);
}


console.log('\n=== Latihan 2: Callback ===');

const kalimat = 'belajar javascript itu menyenangkan';
prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);
=======
function kuadratBiasa(x) {
    return x * x;
}

const kuadrat = (x) => {
    return x * x;
};

const kuadratRingkas = x => x * x;

console.log('=== perbandingan penulisan ===');
console.log('Biasa    :', kuadratBiasa(5));
console.log('Arrow    :', kuadrat(5));
console.log('Ringkas  :', kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam =(nama, waktu) => `selamat ${waktu}, ${nama}!`;

console.log('luas 4x6  :', luas(4, 6));
console.log(salam('Budi', 'pagi'));

function lakukanOperasi(angka, operasicallback) {
    console.log(`angka awal: ${angka}`);
    const hasil = operasicallback(angka);
    console.log(`hasil setelah operasi: ${hasil}`);
}

console.log('\n=== callback ===');
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, x => x + 100);
lakukanOperasi(20, function(x) {
    return x / 2;
});

console.log('\n=== setTimeout (callback) ===');
console.log('pesan 1: sebelum timer');

setTimeout(() => {
    console.log('pesan 3: ini dari dalam setTimout (setelah 1 detik');
}, 1000);

console.log('pesan 2: setelah mendaftarkan timer');


const keHurufBesar = (teks) => {
    return teks.toUpperCase();
};

const tambahSeru = (teks) => {
    return teks + '!!!';
};

const hitungKata = (teks) => {
    return teks.split(' ').length;
};

function prosesKalimat(kalimat, callback) {
    console.log(`\nKalimat awal: ${kalimat}`);
    const hasil = callback(kalimat);
    console.log(`Hasil setelah proses: ${hasil}`);
}


console.log('\n=== Latihan 2: Callback ===');

const kalimat = 'belajar javascript itu menyenangkan';
prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);
>>>>>>> ca9faebd96251a3349fabef091443de9a5ebb9a9
prosesKalimat(kalimat, (teks) => teks.split('').reverse().join(''));