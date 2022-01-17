"use strict"
//Задача 1
let cachingDecoratorNew = (func) => {
  let cache = [];
  return function wrapper(...args) {
    const hash = args.toString();
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      console.log("из кэша: " + cache[idx].result);
      return "из кэша: " + cache[idx].result;
    };
    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    };
    console.log("вычисляем: " + result);
    return "вычисляем: " + result;
  };
};

//Задача 2
function debounceDecoratorNew(func, ms) {
  let timeout;
  let throttled = false;
  return function wrapper(...args) {
    clearTimeout(timeout);
    if (!throttled) {
      func.apply(this, args);
    };
    throttled = true;
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

//Задача 3
const add = (a, b) => a + b;
function debounceDecorator2(func, ms) {
  let timeout;
  let throttled = false;
  function wrapper(...args) {
    wrapper.count++;
    clearTimeout(timeout);
    if (!throttled) {
      func.call(this, ...args);
    };
    throttled = true;
    timeout = setTimeout(() => {
      throttled = false;
      func.call(this, ...args);
    }, ms);
  };
  wrapper.count = 0;
  return wrapper;
};