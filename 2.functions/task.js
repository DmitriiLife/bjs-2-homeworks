// Задание 1
"use strict";
function getArrayParams(...args) {
  let data = {};
  let max = args[0];
  let min = args[0];
  let maxMassiv = Math.max.apply(null, args);
  let minMassiv = Math.min.apply(null, args);
  let result = args.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  let avgMassiv = result / args.length;
  for (let i = 0; i < 1; i += 1) {
    if (max < maxMassiv) {
      max = maxMassiv;
    }
    if (min > minMassiv) {
      max = minMassiv;
    }
  }
  return data = {
    min: min,
    max: max,
    avg: avgMassiv.toFixed(2),
  };
}
console.log(getArrayParams(-99, 99, 10));


// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
