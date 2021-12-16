// Задание 1
"use strict";
function getArrayParams(...args) {
  let data = {};
  let maxMassiv = Math.max.apply(null, args);
  let minMassiv = Math.min.apply(null, args);
  let result = args.reduce((sum, current) => sum + current, 0);
  let avgMassiv = result / args.length;
  return data = {
    min: minMassiv,
    max: maxMassiv,
    avg: Number(avgMassiv.toFixed(2)),
  };
}
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(-99, 99, 10));

// Задание 2
function worker(arr) {
  let s = 0;
  arr = arr.flat(Infinity);
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}
function makeWork(arrOfArr, func) {
  let sumMake = worker(arrOfArr);
  let max = Math.max.apply(null, arrOfArr);
  return sumMake;
}
console.log(makeWork([[1, 2, 3], [4, 5, 6]], worker));//15
console.log(makeWork([[10, 10, 11], [20, 10]], worker));//31
console.log(makeWork([[0, 0, 0], [-1, -100]], worker));//0

// Задание 3
// function worker2(arr) {
// }
// Задание 3
function worker2(arr) {
  // Ваш код
}
