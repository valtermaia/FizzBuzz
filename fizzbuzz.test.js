
const fizzbuzz = require('./fizzbuzz');

it("deve retornar um numero que não seja divisivel por 3 ou 5", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });