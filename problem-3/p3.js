var number = 600851475143;
var current_divisor = 2;

while (number > current_divisor) {
    if (number % current_divisor === 0) {
        number = number / current_divisor;
        current_divisor = 2;
    } else {
        current_divisor++;
    }
}

console.log(current_divisor);
