function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function sumSeries(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i * i / Math.sqrt(i);
  }
  return result.toFixed(2); // Add rounding to display two decimal places
}

function findCommonFactors(a, b) {
  let commonFactors = [];
  if (a % b === 0 || b % a === 0) {
    for (let factor of generatePrimes(b)) {
      if (b % factor === 0 && a % factor === 0) {
        commonFactors.push(factor);
      }
    }
  } else {
    for (let factor of generatePrimes(a)) {
      if (a % factor === 0 || b % factor === 0) {
        commonFactors.push(factor);
      }
    }
  }
  return commonFactors;
}

function generatePrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      primes.push(i);
    }
  }
  return primes;
}
