"use strict"
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };
  fix() {
    this.state = this._state * 1.5;
  };
  set state(number) {
    this._state = number;
    if (this._state < 0)
      this._state = 0;
    if (this._state > 100)
      this._state = 100;
    if (this._state >= 0 && this._state <= 100)
      this._state;
  };
  get state() { return this._state; };
};
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  };
};
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  };
};
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  };
};
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  };
};
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  };
};
//Задание 2
class Library extends PrintEditionItem {
  constructor(name) {
    super(name)
    this.books = [];
  };
  addBook(book) {
    if (this._state > 30)
      this.books.push(book);
  };
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      };
    };
    return null;
  };
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      };
    };
    return null;
  };
};

const library = new Library("Библиотека имени Ленина");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1919, 60));
console.log(library.name);
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1919).name); //"Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
library.state = 29;
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3, тк state 29
library.fix();
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 4, тк починили

//задание 3
//создал класс студент
class Student {
  constructor(name) {
    this.name = name;
    this.mark = [];
    this.markAlgebra = [];
    this.markGeometry = [];
    this.avgMark;
  };
  addMark(mark, subject) {
    if (mark < 1 && mark > 5) {
      this.reason = "Ошибка, оценка должна быть числом от 1 до 5";
    };
    if (mark >= 1 && mark <= 5) {
      this.mark.push(mark);
    };
    if (subject == "algebra") {
      this.markAlgebra.push(subject && mark);
    };
    if (subject == "geometry") {
      this.markGeometry.push(subject && mark);
    };
    if (subject != "algebra" && subject != "geometry") {
      this.reason = "Несуществующий предмет";
    };
    return this.mark;
  };
  exclude(reason) {
    this.reason = reason;
  };
  getAverage() {
    let sum = 0;
    let arrNumber = this.mark.filter(function(number) {
      return number > 0;
    });
    for (let i = 0; i < arrNumber.length; i++) {
      sum = sum + arrNumber[i];
    };
    return this.avgMark = sum / arrNumber.length;
  };
  getAverageBySubject(subject) {
    let sum = 0;
    if (subject != "algebra" && subject != "geometry") {
      this.reason = "Несуществующий предмет";
    };
    if (subject == "geometry") {
      for (let i = 0; i < this.markGeometry.length; i++) {
        sum = sum + this.markGeometry[i];
      };
      return this.avgGeo = sum / this.markGeometry.length;
    };
    if (subject == "algebra") {
      for (let i = 0; i < this.markAlgebra.length; i++) {
        sum = sum + this.markAlgebra[i];
      };
      return this.avgAlg = sum / this.markAlgebra.length;
    };
  };
}

const student = new Student("Олег Никифоров");
console.log(student.name);
student.addMark(5, "algebra");
student.addMark(3, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "biology");
student.addMark(-2, "biology");
student.getAverage();
student.exclude("Исключен за попытку подделать оценки");
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry
student.getAverageBySubject("algebra"); // Средний балл по предмету algebra
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам
console.log(student);