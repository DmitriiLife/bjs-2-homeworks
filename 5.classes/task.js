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
  }
};
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
};
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
};
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
};
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
};
//Задание 2
class Library extends PrintEditionItem {
  constructor(name) {
    super(name)
    this.name = "name";
    this.books = [];
  }
  addBook(book) {
    if (this._state > 30)
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

let library = new Library("Библиотека имени Ленина");
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
  constructor(name) {
    this.name = name;
    this.mark = [];
    this.avgMark = 0;
  }

  addMark(mark, subject) {
    if (mark < 1 && mark > 5) {
      this.reason = "Ошибка, оценка должна быть числом от 1 до 5";
    }
    if (mark >= 1 && mark <= 5) {
      this.mark.push(mark);
    }
    if (subject == "algebra") {
      this.mark.push(subject);
    }
    if (subject == "geometry") {
      this.mark.push(subject);
    }
    if (subject != "algebra" && subject != "geometry") {
      this.reason = "Несуществующий предмет";
    }
    return this.mark;
  }
  exclude(reason) {
    this.reason = "";
  }
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.mark.length; i++) {
      if (isNaN(this.mark[i]) == true) { continue }
      else { sum += Number(this.mark[i]) }
    }
    alert(sum)
    alert(this.mark.length)
    this.avgMark = sum / Number(this.mark.length[i]);
  }
}

let student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(4, "geometry");
student.addMark(6, "biology");
student.addMark(-2, "biology");
student.getAverage();
console.log(student);
student.exclude("Исключен за попытку подделать оценки");
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75



// внесение оценки по названию предмета;

// получение средней оценки по предмету;

// получение средней оценки по всем предметам.

// при неверной оценке (не в промежутке 1-5) оценка не заносится в журнал. Выводится сообщение об ошибке.