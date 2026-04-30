<<<<<<< HEAD
function fn_O1(n) {
    return n + 1;
}

function fn_On(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}
function fn_OnLogN(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++;
        }
    }
    return count;
}
function fn_On2(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}
function measure(fn, n) {
    const start = performance.now();
    fn(n);
    const end = performance.now();
    return (end - start).toFixed(4);
}
function benchmarkSemua(ukuranData) {
    console.log("Ukuran\tO(1)\tO(n)\tO(n log n)\tO(n^2)");

    for (let n of ukuranData) {
        let t1 = measure(fn_O1, n);
        let t2 = measure(fn_On, n);
        let t3 = measure(fn_OnLogN, n);
        let t4 = measure(fn_On2, n);

        console.log(`${n}\t${t1}ms\t${t2}ms\t${t3}ms\t\t${t4}ms`);
    }
}
=======
function fn_O1(n) {
    return n + 1;
}

function fn_On(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}
function fn_OnLogN(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++;
        }
    }
    return count;
}
function fn_On2(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}
function measure(fn, n) {
    const start = performance.now();
    fn(n);
    const end = performance.now();
    return (end - start).toFixed(4);
}
function benchmarkSemua(ukuranData) {
    console.log("Ukuran\tO(1)\tO(n)\tO(n log n)\tO(n^2)");

    for (let n of ukuranData) {
        let t1 = measure(fn_O1, n);
        let t2 = measure(fn_On, n);
        let t3 = measure(fn_OnLogN, n);
        let t4 = measure(fn_On2, n);

        console.log(`${n}\t${t1}ms\t${t2}ms\t${t3}ms\t\t${t4}ms`);
    }
}
>>>>>>> ca9faebd96251a3349fabef091443de9a5ebb9a9
benchmarkSemua([100, 500, 1000, 5000, 10000]);