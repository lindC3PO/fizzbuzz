const { fizzbuzz } = require('../src/fizzbuzz');

test('fizzbuzz returns number of numbers requested', () => {
    let actualOutput = fizzbuzz(3);
    let expected = [
        1,2,3
    ];
    expect(actualOutput).toStrictEqual(expected);
});
