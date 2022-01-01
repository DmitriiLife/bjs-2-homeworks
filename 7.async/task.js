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

  getCurrentFormattedTime(second) {
    if (second == 0 || second == undefined) {
      return new Date().toTimeString().slice(0, 5);
    }
    let d = new Date();
    let millisecondssince1970 = d.getTime();
    let newMillisec = millisecondssince1970 + (1000 * second);
    let newDate = new Date(newMillisec);
    let minutes = newDate.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let hour = newDate.getHours();
    return hour + ":" + minutes;
  };

  start() {
    let checkClock = (clock) => {
      let alarm = this.getCurrentFormattedTime();
      if (clock.time === alarm) {
        clock.callback();
      };
    };
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      }, 1_000);
    };
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
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Ещё Спишь?'), 1);
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(60), () => { console.log('Пора бы уже встать!'); phoneAlarm.removeClock; }, 2);
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(120), () => { console.log('Ну..спи дальше!'); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms(); }, 3);
  phoneAlarm.printAlarms();
  //phoneAlarm.start();
};
testCase();