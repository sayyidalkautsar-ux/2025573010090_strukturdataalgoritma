function sapa() {
    console.log('Halo! selamat datang di praktikum Javascript.');
}
sapa();
sapa();

function sapaNama(nama) {
    console.log(`Halo, ${nama}! selamat belajar.`);
}
sapaNama(`Budi`);
sapaNama(`Siti`);

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilpenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilpenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = 'saya ada di mana saja';

function cekScope() {
    const pesanLokal = 'saya hanya ada di halaman function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if(b === 0){
        console.log('Error: tidak bisa membagi dengan nol');
        return null;
    }
    return a / b;
}

function kalkulator(a, operator, b) {
    if (operator === '+') {
        return tambah(a,b); }

    else if (operator === '-'){
        return kurang(a,b); }

    else if (operator === '*') {
        return kali(a,b); }

    else if (operator === '/') {
        return bagi(a,b); }

    else {
        console.log('Operator tidak dikenali');
        return null; }
    }

console.log('\n=== TEST KALKULATOR ===');

console.log('10 + 5 =', kalkulator(10,'+',5));
console.log('10 - 5 =', kalkulator(10,'-',5));
console.log('10 * 5 =', kalkulator(10,'*',5));
console.log('10 / 5 =', kalkulator(10,'/',5));
console.log('10 / 0 =', kalkulator(10,'-',0));