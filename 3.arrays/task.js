"use strict";
const compareArrays = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((n, i) => n === arr2[i]);

function advancedFilter(arr) {
  let resultArr;
  return arr.filter(((i) => i > 0)).filter(((i) => i % 3 == 0)).map((x => x * 10));
}
alert("Задание 1");
console.log(compareArrays([1, 2, 3], [1, 2, 3]));//true
console.log(compareArrays([1, 2], [1, 2, 3]));//false
console.log(compareArrays([1, 2, 3], [3, 2, 1]));//false
console.log(compareArrays([0, 1, 2], [0, 1]));//false
console.log(compareArrays([0, 1], [0, 1, 2]));//false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));//false
alert("Задание 2");
console.log(advancedFilter([-1, 6, -9, 3]));//[60, 30]
console.log(advancedFilter([-10, -21, 12, 123]));//[120, 1230]
console.log(advancedFilter([-1, -2]));//[]
console.log(advancedFilter([4, 3, 5]));//[30]