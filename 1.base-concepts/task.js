"use strict";
function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let box = [];
  if (discriminant < 0) {
    box = [];
  };
  if (discriminant == 0) {
    box[0] = -b / (2 * a);
  };
  if (discriminant > 0) {
    box[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    box[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
  };
  return box;
};
console.log(solveEquation(1, 2, 10));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, creditTerm, creditAmount, plannedDate) {
  if (percent == 'test') {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  };
  if (creditTerm == 'test') {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${creditTerm}"`);
  };
  if (creditAmount == 'test') {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${creditAmount}"`);
  };
  let P = percent / 100 / 12;
  let now = new Date;
  if (plannedDate == 'plannedDate + 1') {
    plannedDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  }
  if (plannedDate == 'plannedDate + 3') {
    plannedDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
  }
  if (plannedDate == 'plannedDate + 4') {
    plannedDate = new Date(new Date().setFullYear(new Date().getFullYear() + 4));
  }
  let getMounth = (plannedDate.getMonth() + 1) * (plannedDate.getFullYear() - now.getFullYear());
  let totalAmount;
  let loanBody = creditAmount - creditTerm;
  let degree = loanBody * (P + (P / ((Math.pow((1 + P), getMounth)) - 1)));
  let multi = degree * getMounth;
  if (multi <= 0) {
    totalAmount = 0;
  };
  if (multi > 0) {
    totalAmount = multi.toFixed(2);
  };
  return Number(totalAmount);
};
console.log(calculateTotalMortgage(15, 0, 10_000, 'plannedDate + 3'));
console.log(calculateTotalMortgage(10, 0, 10_000, 'plannedDate + 3'));
console.log(calculateTotalMortgage(10, 20_000, 20_000, 'plannedDate + 4'));
console.log(calculateTotalMortgage(10, 1_000, 50_000, 'plannedDate + 1'));
console.log(calculateTotalMortgage(10, 0, 50_000, 'plannedDate + 1'));
console.log(calculateTotalMortgage('test', 0, 50_000, 'plannedDate'));
console.log(calculateTotalMortgage(10, 'test', 50_000, 'plannedDate'));
console.log(calculateTotalMortgage(10, 0, 'test', 'plannedDate'));