
const fizzbuzz = require('./fizzbuzz');

it("deve retornar um numero que não seja múltiplo de 3 ou 5", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
});

it("deve retornar 'fizz' se o numero for múltiplo de 3", () => {
  expect(fizzbuzz(3)).toBe('fizz');
  expect(fizzbuzz(6)).toBe('fizz');
  expect(fizzbuzz(9)).toBe('fizz');
});