"use strict";
function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let box = [];
  if (discriminant < 0) {
    box = [];
  };
  if (discriminant == 0) {
    box[0] = -b / (2 * a);
    box.splice(1);
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

function calculateTotalMortgage(percent, creditTerm, creditAmount, plannedDate, plusYears) {
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
  plannedDate = new Date(new Date().setFullYear(new Date().getFullYear() + plusYears));
  alert(plannedDate);
  let mounthDate = plannedDate.getMonth() + 1;
  let totalAmount;
  let loanBody = creditAmount - creditTerm;
  let degree = loanBody * (P + (P / ((Math.pow((1 + P), mounthDate)) - 1)));
  totalAmount = degree * mounthDate;
  return totalAmount.toFixed(2);
};
console.log(calculateTotalMortgage(15, 0, 10_000, "plannedDate", 3));
console.log(calculateTotalMortgage(10, 0, 10_000, "plannedDate", 3));
console.log(calculateTotalMortgage(10, 20_000, 20_000, "plannedDate", 4));
console.log(calculateTotalMortgage(10, 1_000, 50_000, "plannedDate", 1));
console.log(calculateTotalMortgage(10, 0, 50_000, "plannedDate", 1));