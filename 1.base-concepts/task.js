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
    //box.splice(0);
  };
  return box;
};
console.log(solveEquation(4, -20, 25));
console.log(solveEquation(2, 4, 7));
console.log(solveEquation(3, 8, -11));

"use strict";
function calculateTotalMortgage(percent, creditTerm, creditAmount, date) {
  let fractionPercent = percent / 100;
  let totalAmount;
  let loanBody = creditAmount - creditTerm;
  let P = fractionPercent * 1 / 12;
  let degree = loanBody * (P + (P / ((Math.pow((1 + P), date)) - 1)));
  let test = Math.pow((1 + P), date);
  totalAmount = degree * date;
  return totalAmount.toFixed(2);
};
console.log(calculateTotalMortgage(10, 0, 50000, 12));