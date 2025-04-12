/*
Write a function that takes a string as its only argument and returns a number that indicates
how many uppercase B characters there are in the string.

Next, write a function called countChar that behaves like the previous one, except it takes a
second argument that indicates the character that is to be counted (rather than counting only uppercase
B characters).
*/

// First part of the exercise
function countBs(string) {
    for (let i = 0; i < string.length; i++) {
        numberOfBs = 0;
        if (string[i] === 'B') {
            numberOfBs++;
        }
    }
    return numberOfBs;
}

// Second part of the exercise
function countChar(string, char) {
    let numberOfChar = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            numberOfChar++;
        }
    }
    return numberOfChar;
}

// We can rewrite the first function as:
function countB(string) {
    return countChar(string, 'B');
}

// Some tests to try our functions:
console.log(countBs("BBBBbbbb"));
console.log(countChar("kakkerlak", "k"));
console.log(countB("Bamboozling"));