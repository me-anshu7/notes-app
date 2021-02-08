const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());
console.log(validator.isEmail('andrew@example.com'));
console.log(validator.isEmail('example.com'));
console.log(validator.isURL('https://mead.io'));
