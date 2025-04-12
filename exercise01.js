/*
Write a function that, given two numbers, returns the smallest one.
*/

function min(a, b) {
    return a < b ? a : b;
}

// Another possible solution:
function minimum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Examples:
console.log(min(1, 2));
console.log(minimum(1, 2));
console.log(min(321, 23));
console.log(minimum(321, 23));