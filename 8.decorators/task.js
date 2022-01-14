"use strict"
//Задача 1
let cachingDecoratorNew = (func) => {
  let cache = [];
  function wrapper(...args) {
    const hash = args.toString();
    //const idx = arr.findIndex(el => el.id === item.id)
    let idx = cache.findIndex((i) => hash);// ищем элемент, хэш которого равен нашему хэшу
    alert(idx)
    if (idx in cache) {
      console.log("из кэша: " + cache[idx]);// индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "из кэша: " + cache[idx];
    }
    let result = func(...args);// в кэше результата нет - придётся считать
    cache.push(hash, result);// добавляем элемент с правильной структурой
    alert(cache)
    if (cache.length > 5) {
      cache.shift();// если слишком много элементов в кэше надо удалить самый старый (первый)
    };
    console.log("вычисляем: " + result);
    return "вычисляем: " + result;
  }
  return wrapper;
};
const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); // вычисляем: 6
upgradedAddThree(1, 2, 3); // из кэша: 6 
upgradedAddThree(2, 2, 3); // вычисляем: 7
upgradedAddThree(3, 2, 3); // вычисляем: 8
upgradedAddThree(4, 2, 3); // вычисляем: 9
upgradedAddThree(5, 2, 3); // вычисляем: 10
upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
//Задача 2
let debounceDecorator = (func, ms) => {
  let timeout;
  return function (...rest) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      let res = func(...rest)
      console.log(res)
    }, ms);
  };
};

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

//Задача 3
function debounceDecorator2(func) {
  let timeout;
  return function (...rest) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      let res = func(...rest)
      console.log(res)
    });
  };
};
const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal2 = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal2); // Сигнал отправлен
setTimeout(upgradedSendSignal2, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal2, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal2, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal2, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal2, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal2, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с