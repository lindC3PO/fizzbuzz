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
    let listOfNumbers = [];
    for (let i = 1; i <= linesToPrint; i++) {
        listOfNumbers.push(i);
    }

    // let i = 1;
    // while (i <= linesToPrint) {
    //     listOfNumbers.push(i);
    //     i = i + 2;
    // }
    return listOfNumbers;
}
module.exports = {
    fizzbuzz
}