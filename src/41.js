// Example 1: Function to calculate the area of a circle given its radius

function calculateCircleArea(radius) {
    const pi = Math.PI;
    return (radius * radius * pi);
}

// Example 2: Function to generate a random number between two given numbers

function getRandomNumber(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// Example 3: Function to check if two strings are anagrams

function areAnagrams(str1, str2) {
    const charMap1 = new Map();
    const charMap2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        if (charMap1.has(str1[i])) {
            charMap1.set(str1[i], charMap1.get(str1[i]) + 1);
        } else {
            charMap1.set(str1[i], 1);
        }

        if (charMap2.has(str2[i])) {
            charMap2.set(str2[i], charMap2.get(str2[i]) - 1);
        } else {
            charMap2.set(str2[i], -1);
        }
    }

    for (const key of charMap1.keys()) {
        if (charMap1.get(key) !== charMap2.get(key)) return false;
    }

    return true;
}

// Example 4: Function to generate a Fibonacci sequence up to n

function fibonacciSequence(n) {
    let sequence = [0, 1];
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

// Example 5: Function to find the nth number in a geometric progression

function findGpNthTerm(n, firstTerm, commonRatio) {
    if (n <= 0 || n >= 6) return 'The value of n must be between 1 and 6.';
    let numerator = firstTerm;
    let denominator = 2 * commonRatio;
    for (let i = 1; i < n - 1; i++) {
        numerator *= commonRatio;
        if (i % 3 === 0) {
            denominator /= 2;
        }
    }
    return Math.round(numerator / denominator);
}
