// Project Euler Problem 2 solution in javascript
// John Spiva

var current = 0;
var term1 = 0;
var term2 = 1;
var sum = 0;

while (current <= 4000000) {
    current = term1 + term2;
    term1 = term2;
    term2 = current;
    if (current % 2 === 0) {
        sum += current;
    }
}

console.log(sum);
