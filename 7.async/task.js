"use strict"
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  };

  addClock(time, callback, id) {
    if (!id) { throw new Error('error text'); }
    else if (this.alarmCollection.find(clock => clock.id === id)) {
      return console.error('Будильник с таким id уже существует')
    };
    return this.alarmCollection.push({ id, time, callback });
  };

  removeClock(id) {
    const beginLenght = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
    const endLenght = this.alarmCollection.length;
    return beginLenght > endLenght;
  };

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  nextTime(plusMinutes) {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes() + plusMinutes;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes;
    return strTime;
  }

  start() {
    function checkClock(clock) {
      let alarm = this.getCurrentFormattedTime();
      if (clock.time === alarm) {
        return clock.callback();
      };
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          this.alarmCollection.forEach(clock => checkClock(clock));
        }, 1000);
      };
    }
    return;
  };

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    };
  };

  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(`Будильник номер ${clock.id} заведен на ${clock.time}`));
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };
};

function testCase() {
  const phoneAlarm = new AlarmClock();
  phoneAlarm.addClock(phoneAlarm.nextTime(0), () => console.log('Ещё Спишь?'), 1);
  phoneAlarm.addClock(phoneAlarm.nextTime(1), () => console.log('Пора бы уже встать!'), 2);
  phoneAlarm.addClock(phoneAlarm.nextTime(2), () => console.log('Ну..спи дальше!'), 3);
  phoneAlarm.addClock(phoneAlarm.nextTime(3), () => console.log('Пора бы!'), 4);
  phoneAlarm.printAlarms();
  phoneAlarm.removeClock(4);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
  phoneAlarm.stop();
};
testCase();