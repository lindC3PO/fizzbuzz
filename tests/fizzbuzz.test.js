const { oneFizzbuzz, fizzbuzz } = require('../src/fizzbuzz');

test('fizzbuzz returns passed in number', () => {
    let actualOutput = oneFizzbuzz(1);
    let expected = 1;
    expect(actualOutput).toStrictEqual(expected);
});

test('print fizz for multiples of three', () => {
    let actualOutput = oneFizzbuzz(3);
    let expected = 'fizz';
    expect(actualOutput).toStrictEqual(expected);
});

test('print buzz for multiples of five', () => {
    let actualOutput = oneFizzbuzz(5);
    let expected = 'buzz';
    expect(actualOutput).toStrictEqual(expected);
});

test('print fizzbuzz for multiples of five and three', () => {
    let actualOutput = oneFizzbuzz(15);
    let expected = 'fizzbuzz';
    expect(actualOutput).toStrictEqual(expected);
});

test('end to end fizzbuzz', () => {
    let actualOutput = fizzbuzz(16);
    let expected = [
        1,2,'fizz',4,'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];
    expect(actualOutput).toStrictEqual(expected);
});