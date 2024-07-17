

function fibnocci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 0; 
    if (n === 2) return 1; 
    return fibnocci(n - 1) + fibnocci(n - 2);
} 

const n = parseInt(prompt("Enter n"));
alert(fibnocci(n))

module.exports = fibnocci;