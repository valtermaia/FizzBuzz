const fizzbuzz = require('./fizzbuzz');

for (let i = 1; i < 101; i++) {
    console.log('i = ', i, ' - ', fizzbuzz(i));
}