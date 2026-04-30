
function intersectionN2(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}
function intersectionSet(arr1, arr2) {
    const set2 = new Set(arr2);
    const result = [];

    for (let num of arr1) {
        if (set2.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
function groupAnagrams(arr) {
    const map = {};

    for (let word of arr) {
        let key = word.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    return Object.values(map);
}
function checkN3(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function checkNlogN(arr) {
    const set = new Set(arr);

    for (let c of arr) {
        let target = c * c;

        for (let a of arr) {
            let b = target - a;
            if (set.has(b)) {
                return true;
            }
        }
    }
    return false;
}
function measure(label, fn) {
    console.time(label);
    fn();
    console.timeEnd(label);
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const nums = [1, 2, 3, 4, 5];

// Jalankan
console.log("Intersection O(n^2):", intersectionN2(arr1, arr2));
console.log("Intersection O(n):", intersectionSet(arr1, arr2));

console.log("Anagram:", groupAnagrams(words));

console.log("Check O(n^3):", checkN3(nums));
console.log("Check O(n log n):", checkNlogN(nums));

// Ukur waktu
measure("Intersection N2", () => intersectionN2(arr1, arr2));
measure("Intersection Set", () => intersectionSet(arr1, arr2));
measure("Check N3", () => checkN3(nums));
measure("Check NlogN", () => checkNlogN(nums));