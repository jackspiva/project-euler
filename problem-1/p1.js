// Project Euler Problem 1 solution in javascript
// John Spiva

var sum = 0;
for (var i = 999; i > 0; i--) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum += i;
    }
}
console.log(sum);
