// // Задание 1
"use strict";
function getArrayParams(...args) {
  let max = Math.max.apply(null, args);
  let min = Math.min.apply(null, args);
  let result = args.reduce((sum, current) => sum + current, 0);
  let avg = result / args.length;
  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2)),
  };
}
// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return Math.abs(max - min);
}

alert("Задание 1");
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(getArrayParams(-99, 99, 10));
alert("Задание 2");
console.log(makeWork([[1, 2, 3], [4, 5, 6]], worker));//15
console.log(makeWork([[10, 10, 11], [20, 10]], worker));//31
console.log(makeWork([[0, 0, 0], [-1, -100]], worker));//0
alert("Задание 3");
console.log(makeWork([[10, 20, 30], [-40, -50, -65]], worker2));//25
console.log(makeWork([[10, 10, 11], [20, 10]], worker2));//10
console.log(makeWork([[0, 1, 2], [-1, -100]], worker2));//99