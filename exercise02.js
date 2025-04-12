/*
Define a recursive function isEven, that returns if a numebr is even or not
*/

// The number 0 is even
// The number 1 is odd
// For any other number N , has the same parity than N - 2
function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

// Examples for the function:
console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(13321));