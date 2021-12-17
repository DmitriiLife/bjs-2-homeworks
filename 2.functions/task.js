// // Задание 1
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
// Задание 2
function worker(arr) {
  let s;
  arr.map(i => s += i, s = 0).reverse()[0]
  return s;
}
function makeWork(arrOfArr, func) {
  let max;
  if (worker(arrOfArr[1]) >= worker(arrOfArr[0])) {
    max = worker(arrOfArr[1]);
  }
  else {
    (worker(arrOfArr[1]) <= worker(arrOfArr[0]))
    max = worker(arrOfArr[0]);
  };
  return max;

}
// Задание 3
function worker2(arr) {
  let difference;
  let difference0 = Math.max.apply(null, arr[0]) - Math.min.apply(null, arr[0]);
  let difference1 = Math.max.apply(null, arr[1]) - Math.min.apply(null, arr[1]);
  if (difference1 > difference0) {
    difference = difference1
  }
  else {
    (difference1 < difference0)
    difference = difference0
  };
  return difference;
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
alert("test");
console.log(worker2([[10, 20, 30], [-40, -50, -65]]));//25
console.log(worker2([[10, 10, 11], [20, 10]]));//10
console.log(worker2([[0, 1, 2], [-1, -100]]));//99