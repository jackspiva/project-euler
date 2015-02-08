// Project Euler Problem 4 in javascript
// John Spiva

var isPalindrome = function(number) {
    var num = number.toString();
    var length;
    if (number % 2 === 0) {
        length = num.length;
    } else {
        length = num.length - 1;
    }
    for(var i = 0; i < length; i++) {
        if (num[i] != num[num.length - i - 1]) {
            return false;
        }
    }
    return true;
};

var max3digitPal = function() {
    for (var i = 999 * 999; i >= 100 * 100; i--) {
        if (isPalindrome(i)) {
            for (var j = 999; j >= 100; j--) {
                if ((i % j === 0) && (i / j > 99) && (i / j < 1000)) {
                    return i;
                }
            }
        }
    }
};

var answer = max3digitPal();
console.log(answer);
