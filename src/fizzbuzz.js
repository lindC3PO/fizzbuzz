/**
 * Fizz Buzz
 *
 * Write a program that prints one line for each number from 1 to 100
 * Usually just print the number itself.
 * For multiples of 3 print Fizz instead of the number
 * For multiples of 5 print Buzz instead of the number
 * For multiples of both 3 and 5 print FizzBuzz instead of the number
 */

function fizzbuzz(linesToPrint) {
    let fizzBuzzList = [];
    for (let i = 1; i <= linesToPrint; i++) {
        fizzBuzzList.push(oneFizzbuzz(i));
    }

    return fizzBuzzList;
}

function oneFizzbuzz(i) {
    if (i % 5 === 0 && i % 3 === 0) {
        return 'fizzbuzz';
    } else if (i % 3 === 0 ) {
        return 'fizz';
    } else if (i % 5 === 0) {
        return 'buzz';
    } else {
        return i;
    }
}

module.exports = {
    fizzbuzz, oneFizzbuzz
}

