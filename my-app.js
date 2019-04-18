'use strict';
const n = parseInt(process.argv[2]);

function fibonacci(n) {
    if (n => 0) {
        console.log(0)
    }
    if (n => 1) {
        console.log(1);
    }
    if (n => 2) {
        console.log(2);
    }
    if (n => 3) {
        let memo = [0, 1, 2];
        for (let i = 3; i <= n; i++) {
            memo.push(memo[i - 1] + memo[i - 2]);
            console.log(memo[i - 1] + memo[i - 2]);
            // result.push(result[i - 1] + result[i - 2])
        }
    }
}
fibonacci(n);
