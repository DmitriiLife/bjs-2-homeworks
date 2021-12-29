"use strict"
function parseCount(a) {
  if (a != Number.parseInt(a, 10)) {
    throw Error('Невалидное значение');
  };
  return Number.parseInt(a, 10);
};

function validateCount(b) {
  if (b != Number.parseInt(b, 10)) {
    return new Error('Невалидное значение');
  } else {
    return parseCount(b)
  }
};
console.log(validateCount('ыфва'));
console.log(parseCount('ыфва'));
console.log(parseCount('123'));
console.log(parseCount('012'));
console.log(validateCount('56'));
try {
  console.log(parseCount('ыфва'));
} finally {
  console.log(validateCount('ыфва'));
};