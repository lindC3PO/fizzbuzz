const { fizzbuzz } = require('../src/fizzbuzz');

test('fizzbuzz returns number of numbers requested', () => {
    let actualOutput = fizzbuzz(1);
    let expected = [
        1
    ];
    expect(actualOutput).toStrictEqual(expected);
});

test('print fizz for multiples of three', () => {
    let actualOutput = fizzbuzz(6);
    let expected = [
        1,2,'fizz',4,5,'fizz'
    ];
    expect(actualOutput).toStrictEqual(expected);
});