"use strict"
//Задача 1
function parseCount(value) {
  const number = Number.parseInt(value, 10);
  if (isNaN(number)) {
    throw TypeError('Невалидное значение');
  };
  return number;
};

function validateCount(value) {
  try { return parseCount(value) }
  catch (e) { return e };
};

//Задача 2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || c + b < a || a + c < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    };
  };

  getPerimeter() {
    return this.a + this.b + this.c;
  };

  getArea() {
    const p = 0.5 * this.getPerimeter();
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  };
};

function getTriangle(a, b, c) {
  try { return new Triangle(a, b, c) }
  catch (e) {
    return {
      getArea() {
        return 'Ошибка! Треугольник не существует'
      },
      getPerimeter() {
        return 'Ошибка! Треугольник не существует'
      }
    };
  };
};

// console.log(parseCount('123'));
// console.log(parseCount('012'));
// console.log(validateCount('56'));
// console.log(validateCount('ыфва'));
// console.log(parseCount('ыфва'));
let what = new Triangle(1, 2, 1);
console.log(what);
console.log(what.getPerimeter());
console.log(what.getArea());