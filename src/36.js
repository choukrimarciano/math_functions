function multiply(a, b) {
    return a * b;
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function squareRoot(value) {
    if (value < 0) {
        throw new Error("Square root of negative numbers is not defined in this function.");
    }
    return Math.sqrt(value);
}

function calculate(expression) {
    try {
        const result = eval(expression);
        console.log(`The expression ${expression} evaluates to: ${result}`);
        return result;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
