"use strict"
//Задача 1
let cachingDecoratorNew = (func) => {
  let cache = [];
  return function wrapper(...args) {
    const hash = args.toString();
    let idx = cache.findIndex((item) => item.hash === hash);// ищем элемент, хэш которого равен нашему хэшу
    if (idx in cache) {
      console.log("из кэша: " + cache[idx].result);// индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "из кэша: " + cache[idx].result;
    };
    let result = func(...args);// в кэше результата нет - придётся считать
    cache.push({ hash, result });// добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift();// если слишком много элементов в кэше надо удалить самый старый (первый)
    };
    cache[hash] = result;
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
    wrapper.history.push(args);
    clearTimeout(timeout);
    if (!throttled) {
      func.apply(this, args);
    };
    throttled = true;
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
  wrapper.history = [];
  return wrapper;
};