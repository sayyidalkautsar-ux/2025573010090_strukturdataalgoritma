const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

console.log('=== forEach: Tampilkan Semua Nilai ===');
nilaiMahasiswa.forEach((nilai, indeks) => {
    console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if (nilai >= 90) return 'A';
    if (nilai >= 80) return 'B';
    if (nilai >= 70) return 'C';
    if (nilai >= 60) return 'D';
    return 'E';
});

console.log('\n=== map: Nilai ke Grade ===');
console.log('Nilai  :', nilaiMahasiswa);
console.log('Grade  :', gradeHuruf);

const nilaiLulus = nilaiMahasiswa.filter(nilai => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter(nilai => nilai < 60);

console.log('\n=== filter: Lulus dan Tidak Lulus ===');
console.log('semua nilai :', nilaiMahasiswa);
console.log('Nilai lulus :', nilaiLulus);
console.log('Nilai gagal :', nilaiGagal);

const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
    return akumulator + nilai;
}, 0);

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log('\n=== reduce : statistik Nilai ===');
console.log('Total nilai :', totalNilai);
console.log('Rata-rata   :', rataRata.toFixed(2));

const rataRataNilaiLulus = nilaiMahasiswa
.filter(nilai => nilai >= 60)
.reduce((acc, Val, idx, arr) => {
    return acc + Val / arr.length;
}, 0);

console.log('\n=== method chaining ===');
console.log('Rata-rata nilai lulus:', rataRataNilaiLulus.toFixed(2));

// Latihan 4 Analisis Data Produk


const produk = [
    { nama: 'Laptop', harga: 7000000, tersedia: true },
    { nama: 'Mouse', harga: 200000, tersedia: true },
    { nama: 'Keyboard', harga: 350000, tersedia: false },
    { nama: 'Monitor', harga: 1500000, tersedia: true },
    { nama: 'Printer', harga: 1200000, tersedia: false }
];

console.log('\n=== Latihan 4: Analisis Data Produk ===');


const produkTersedia = produk.filter(item => item.tersedia);

console.log('\nProduk yang tersedia:');
console.log(produkTersedia);

const namaProduk = produk.map(item => item.nama);

console.log('\nNama semua produk:');
console.log(namaProduk);

const totalHarga = produk.reduce((total, item) => total + item.harga, 0);

console.log('\nTotal harga produk:');
console.log(totalHarga);
console.log('\nDaftar produk:');

produk.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nama} - Rp${item.harga}`);
});