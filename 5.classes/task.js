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
    super(name);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "magazine";
  }
};
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "book";
    this.author = author;
  }
};
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "novel";
  }
};
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "fantastic";
  }
};
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "detective";
  }
};
//Задание 2
class Library extends Book {
  constructor(name, books) {
    super(name);
    this.name = "";
    this.books = [];
  }
  addBook(book) {
    if (this._state >= 30)
      this.books.push(book);
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
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}
const library = new Library("Библиотека имени Хары");
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
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = [];
    this.mark = [];
    this.avgMark = "";
  }
  setSubject(subject) {
    this.subject.push(subject);
  }
  addMarks(mark, ...rest) {
    if (this.mark === undefined) {
      this.mark = [mark, ...rest]; // Первая оценка добавляется в массив
      if (this.mark > 5 && this.mark < 1) {
        this.reason;
      }
    } else {
      this.mark.push(mark, ...rest); // Все остальные оценки пушатся
    }
  }
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.mark.length; i++) {
      sum = sum + this.mark[i];
    }
    this.avgMark = sum / this.mark.length;
  }
  exclude(reason) {

    this.reason = reason;
  }
}
const student1 = new Student("Andrey", "male", 21);
const student2 = new Student("Lara", "female", 19);

student1.setSubject("Algebra");
student1.setSubject("Infomatica");
student1.addMarks(5, 4, 5);
student2.setSubject("Geometry");
student2.setSubject("Infomatica");
student2.addMarks(2, 3, 2, 0);
console.log(student1.getAverage()); //4.6666
console.log(student2.getAverage());
student2.exclude('Исключен за попытку подделать оценки');
console.log(student1);
console.log(student2);

// внесение оценки по названию предмета;

// получение средней оценки по предмету;

// получение средней оценки по всем предметам.

// при неверной оценке (не в промежутке 1-5) оценка не заносится в журнал. Выводится сообщение об ошибке.