// index.js
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = { isPrime };  // Export the function to use it in other files

function evenOdd(num) {
    return num % 2 === 0;
}

module.exports = { isPrime, evenOdd };  // Export both functions
