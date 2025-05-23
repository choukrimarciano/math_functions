function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

// Example usage
const testNumbers = [1, 2, 3, 4, 5];
console.log(calculateSum(testNumbers)); // Output: 15
