"use strict";
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state = this._state * 1.5;
  }
  set state(number) {
    this._state = number;
    if (this._state < 0) this._state = 0;
    if (this._state > 100) this._state = 100;
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}
//Задание 2
class Library extends Magazine {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (this._state > 30) this.books.push(book);
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    let findBook = this.findBookBy("name", bookName);
    let idx = this.books.indexOf(findBook);
    if (idx !== -1) {
      return this.books.splice(idx, 1)[0];
    }
    return null;
  }
}

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
    this.marks = [];
  }
  addMark(mark, subject) {
    if (mark < 1 || mark > 5) {
      return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
    if (this.marks[subject] === undefined) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }
  exclude(reason) {
    delete this.marks;
    this.excluded = reason;
  }
  getAverage() {
    let sum = 0;
    let lengthSum = 0;
    for (let subject in this.marks) {
      sum += this.marks[subject].reduce((sum, item) => sum + item);
      lengthSum += this.marks[subject].length;
    }
    return sum / lengthSum;
  }
  getAverageBySubject(subject) {
    if (!(subject in this.marks)) {
      return "Несуществующий предмет";
    }
    let sum = 0;
    for (let mark of this.marks[subject]) {
      sum += mark;
    }
    return sum / this.marks[subject].length;
  }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.addMark(0, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
console.log(student);
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");
console.log(student);
