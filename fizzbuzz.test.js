
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

it("deve retornar 'buzz' se o numero for múltiplo de 5", () => {
  expect(fizzbuzz(5)).toBe('buzz');
  expect(fizzbuzz(10)).toBe('buzz');
  expect(fizzbuzz(20)).toBe('buzz');
});

it("deve retorna 'fizzbuzz' se o numero for múltiplo de 3 e 5", () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz');
  expect(fizzbuzz(30)).toBe('fizzbuzz');
});