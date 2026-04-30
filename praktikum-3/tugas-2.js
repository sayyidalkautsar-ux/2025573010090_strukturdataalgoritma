function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1;
  return basis * pangkat(basis, eksponen - 1);
}

function balikString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + balikString(str.slice(0, -1));
}

function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}

console.log("=== Uji Pangkat ===");
console.log(`2^3 = ${pangkat(2, 3)}`);
console.log(`4^2 = ${pangkat(4, 2)}`);
console.log(`3^4 = ${pangkat(3, 4)}`);

console.log("\n=== Uji Balik String ===");
console.log(`halo -> ${balikString("halo")}`);
console.log(`data -> ${balikString("data")}`);

console.log("\n=== Uji Palindrom ===");
const kata = ["katak", "civic", "level", "halo"];

kata.forEach(k => {
  console.log(`${k} -> ${cekPalindrom(k) ? "Palindrom" : "Bukan Palindrom"}`);
});