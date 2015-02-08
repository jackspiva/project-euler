// Project Euler Problem 6 in javascript
// John Spiva

var sumOfSquares = 0;

for (var i = 1; i <= 100; i++) {
    sumOfSquares += Math.pow(i, 2);
}

var sum = 0;

for (var i = 1; i <= 100; i++) {
    sum += i;
}

var squareOfSum = Math.pow(sum, 2);

console.log(squareOfSum - sumOfSquares);
