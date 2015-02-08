// Project Euler Problem 5 in javascript
// John Spiva

var divisible1to20 = function(number) {
    for (var i = 1; i <= 20; i++) {
        if (number % i != 0) {
            return false;
        }
    }
    return true;
};

found = false;
answer = 1;

while (!found) {
    if (divisible1to20(answer)) {
        found = true;
    } else {
        answer++;
    }
}

console.log(answer);
