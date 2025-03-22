function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
