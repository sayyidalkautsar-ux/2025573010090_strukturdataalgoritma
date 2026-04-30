<<<<<<< HEAD
// 03-operator.js
//===============================
//OPERATOR JAVASCRIPT
//===============================

// --- OPERATOR ARITMATIKA ---
let a = 17;
let b = 5;

console.log('=== ARITMATIKA ===');
console.log(`${a} + ${b} = ${a + b}`); //22
console.log(`${a} - ${b} = ${a - b}`); //12
console.log(`${a} * ${b} = ${a * b}`); //85
console.log(`${a} / ${b} = ${a / b}`); //3.4
console.log(`${a} % ${B} = ${a % b}`); //2 (sisa bagi: 17 =5x3+2)
console.log(`${a} ** ${b} = ${a ** b}`); //1419857 (17 pangkat 5)

// --- OPERATOR PERBANDINGAN ---
console.log('=== perbandingan ===');
console.log('10 > 5  :', 10 > 5);  // true
console.log('10 < 5  :', 10 < 5);  // false
console.log('10 >= 5 :', 10 >= 5); //true
console.log('10 >= 9 :', 10 >= 9); //false

// perbedaan == dan ===
console.log('--- perbedaan == dan === ---');
console.log('5 == "5"  :', 5 == '5');   //true (jangan gunakan ini)
console.log('5 === "5" :', 5 === '5');  //false (selalu gunakan ini)
console.log('5 !== 3 :', 5 !== 3);      // true (tidak sama dengan)

// --- OPERATOR LOGIKA ---
console.log('=== Logika ===');
let sudahMakan = true;
let punyaUang = false;

//AND (&&) : kedua kondisi harus true
console.log('makan && uang  :', sudahMakan && punyaUang); //false

// OR (||): kedua kondisi harus true
console.log('Makan || Uang :', sudahMakan || punyaUang) //true

// NOT (!): membalik nilai boolen
console.log('!sudahMakan   :', !sudahMakan); //false
=======
// 03-operator.js
//===============================
//OPERATOR JAVASCRIPT
//===============================

// --- OPERATOR ARITMATIKA ---
let a = 17;
let b = 5;

console.log('=== ARITMATIKA ===');
console.log(`${a} + ${b} = ${a + b}`); //22
console.log(`${a} - ${b} = ${a - b}`); //12
console.log(`${a} * ${b} = ${a * b}`); //85
console.log(`${a} / ${b} = ${a / b}`); //3.4
console.log(`${a} % ${B} = ${a % b}`); //2 (sisa bagi: 17 =5x3+2)
console.log(`${a} ** ${b} = ${a ** b}`); //1419857 (17 pangkat 5)

// --- OPERATOR PERBANDINGAN ---
console.log('=== perbandingan ===');
console.log('10 > 5  :', 10 > 5);  // true
console.log('10 < 5  :', 10 < 5);  // false
console.log('10 >= 5 :', 10 >= 5); //true
console.log('10 >= 9 :', 10 >= 9); //false

// perbedaan == dan ===
console.log('--- perbedaan == dan === ---');
console.log('5 == "5"  :', 5 == '5');   //true (jangan gunakan ini)
console.log('5 === "5" :', 5 === '5');  //false (selalu gunakan ini)
console.log('5 !== 3 :', 5 !== 3);      // true (tidak sama dengan)

// --- OPERATOR LOGIKA ---
console.log('=== Logika ===');
let sudahMakan = true;
let punyaUang = false;

//AND (&&) : kedua kondisi harus true
console.log('makan && uang  :', sudahMakan && punyaUang); //false

// OR (||): kedua kondisi harus true
console.log('Makan || Uang :', sudahMakan || punyaUang) //true

// NOT (!): membalik nilai boolen
console.log('!sudahMakan   :', !sudahMakan); //false
>>>>>>> ca9faebd96251a3349fabef091443de9a5ebb9a9
console.log('!punyaUang    :', !punyaUang); //true