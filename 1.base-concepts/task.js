"use strict";
function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let d = discriminant;
  let box = [];
  for (let i = 0; i < 1; i++) {
    box.push(i);
  }
  if (d < 0) { //2,4,7
    box = [];
  }
  if (d == 0) { //4,-20,25
    box[0] = -b / (2 * a);
    box.splice(1);
  }
  if (d > 0) { //a = 3, b = 8, c = -11
    box[0] = (-b + Math.sqrt(d)) / (2 * a);
    box[1] = (-b - Math.sqrt(d)) / (2 * a);
    //box.splice(0);
  }
  return box;
}
console.log(solveEquation(4, -20, 25));
console.log(solveEquation(2, 4, 7));
console.log(solveEquation(3, 8, -11));

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
