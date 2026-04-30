const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 95 }
];

function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, curr) => {
      acc.total += 1;
      acc.jumlahNilai += curr.nilai;
      acc.tertinggi = Math.max(acc.tertinggi, curr.nilai);
      acc.terendah = Math.min(acc.terendah, curr.nilai);
      return acc;
    },
    { total: 0, jumlahNilai: 0, tertinggi: -Infinity, terendah: Infinity }
  );

  return {
    total: hasil.total,
    rataRata: hasil.jumlahNilai / hasil.total,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah
  };
}

function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;

    if (mhs.nilai >= 90) grade = "A";
    else if (mhs.nilai >= 80) grade = "B";
    else if (mhs.nilai >= 70) grade = "C";
    else if (mhs.nilai >= 60) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

const statistik = hitungStatistik(dataMahasiswa);
const lulus = filterLulus(dataMahasiswa, 75);
const denganGrade = tambahGrade(dataMahasiswa);

console.log("=== Statistik Nilai ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata       : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus (>= 75) ===");
lulus.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== Data dengan Grade ===");
denganGrade.forEach(mhs => {
  console.log(`${mhs.nama} - ${mhs.nilai} - Grade: ${mhs.grade}`);
});