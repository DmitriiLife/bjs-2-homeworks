"use strict"
//создал функцию студент
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let student1 = new Student("Andrey", "male", 21);
let student2 = new Student("Lara", "female", 19);
//создал предмет
Student.prototype.setSubject = function(subject) {
  this.subject = subject;
}
//создал массив оценки
Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [mark]; // Первая оценка добавляется в массив
  } else {
    this.marks.push(mark); // Все остальные оценки пушатся
  }
}
//создал возможность добавить несколько оценок
Student.prototype.addMarks = function(mark1, ...rest) {
  if (this.marks === undefined) {
    this.marks = [mark1, ...rest]; // Первая оценка добавляется в массив
  } else {
    this.marks.push(mark1, ...rest); // Все остальные оценки пушатся
  }
}
//создал вычесление средней арифметической оценки 
Student.prototype.getAverage = function() {
  let sum = 0;
  let total = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum = sum + this.marks[i];
  }
  return total = sum / this.marks.length;
}
//создал удаление
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.reason = reason;
}
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
student2.setSubject("Geometry");
student2.addMarks(2, 3, 2);
console.log(student1.getAverage()); //4.6666
student2.exclude('low grades');
console.log(student1);
console.log(student2);