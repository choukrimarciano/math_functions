// Example JavaScript code for simple arithmetic operations
function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b !== 0) {
        return a / b;
    }
    throw "Cannot divide by zero";
}

// Example usage
console.log(addNumbers(10, 5)); // Output: 15
console.log(subtractNumbers(10, 5)); // Output: 5
console.log(multiplyNumbers(10, 5)); // Output: 50
console.log(divideNumbers(10, 5)); // Output: 2
