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
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}

function calculate(expression) {
  const numbers = expression.match(/\d+|\+\-*/g);
  let result = numbers[0];
  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] === '-' || numbers[i] === '+' || numbers[i] === '*' || numbers[i] === '/') {
      const currentNumber = parseFloat(numbers[i]);
      const nextNumber = parseFloat(numbers[i + 1]);

      switch (expression.charAt(expression.length - 1)) {
        case '+':
          result += currentNumber;
          break;
        case '-':
          result -= currentNumber;
          break;
        case '*':
          result *= currentNumber;
          break;
        default:
          throw new Error(`Unknown operator: ${expression.charAt(expression.length - 1)}`);
      }
    } else {
      const nextNumber = parseFloat(numbers[i + 1]);
      if (numbers[i] === 'e' || numbers[i] === '^') {
        result = currentNumber * Math.pow(nextNumber, parseInt(expression.substring(2)));
      } else {
        result += currentNumber;
      }
    }
  }

  return result;
}

// Example usage:
const expression = "3 + 5 - 4 * 2 / (10 - 1)";
console.log("Result:", calculate(expression));
