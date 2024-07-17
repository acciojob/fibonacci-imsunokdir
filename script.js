

function fibnocci(n,memo = {}) { 
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];

    memo[n] = fibnocci(n - 1, memo) + fibnocci(n - 2, memo);
    return memo[n];
} 

// const n = parseInt(prompt("Enter n"));
// alert(fibnocci(n))  

module.exports = fibnocci;