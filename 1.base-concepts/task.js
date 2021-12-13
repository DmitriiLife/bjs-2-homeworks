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
  if (percent < 0) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    return;
  };
  if (creditTerm < 0) {
    alert(`Параметр "Начальный взнос" содержит неправильное значение "${creditTerm}"`);
    return;
  };
  if (creditTerm < 0) {
    alert(`Параметр "Общая стоимость" содержит неправильное значение "${creditAmount}"`);
    return;
  };
  let P = percent / 100 / 12;
  let now = new Date;
  plannedDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
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
console.log(calculateTotalMortgage(15, 0, 10_000, 'plannedDate'));
console.log(calculateTotalMortgage(10, 0, 10_000, 'plannedDate'));
console.log(calculateTotalMortgage(10, 20_000, 20_000, 'plannedDate'));
console.log(calculateTotalMortgage(10, 1_000, 50_000, 'plannedDate'));
console.log(calculateTotalMortgage(10, 0, 50_000, 'plannedDate'));