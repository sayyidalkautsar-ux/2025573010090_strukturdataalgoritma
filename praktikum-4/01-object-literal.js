const mahasiswa ={
    nama    : 'Budi santoso',
    umur    : 20,
    jurusan : 'Teknik Informatika',
    ipk     : 3.75,
    aktif   : true,
};

console.log('=== Akses Property ===');
console.log('Nama       :', mahasiswa.nama);
console.log('Jurusan    :', mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('Ipk        :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa,umur = 21;

console.log('\nsetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('setelah delete:', mahasiswa);

const dosen = {
    nama        : 'Dr. Ahmad Fauzi',
    matakuliah  : 'Struktur Data',
    pengalaman  : 10,   //tahun

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.matakuliah}.`;
    },

    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());


console.log('\n=== Iterasi Objeck ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(`  ${key}: ${dosen[key]}`);
    }
}

console.log('keys   :', Object.keys(mahasiswa));
console.log('values :', Object.values(mahasiswa));
