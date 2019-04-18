'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}



//
// const n = process.argv[2];
// function fibonacci(n) {
//     if (n === '0') {
//         return 0;
//     } else if (n === '1') {
//         return [0,1];
//     } else if (n === '2') {
//         return [0, 1, 2];
//     } else {
//         let result = [0, 1, 2];
//         for (let i = 3; i <= n; i++) {
//             result.push(result[i - 1] + result[i - 2])
//         }
//         return result;
//     }
// }
//
// console.log(fibonacci(n));
