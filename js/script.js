/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); 
*/

/*
if (4) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');
*/

/*
const num = 51;

switch (num) {
    case 49:
        console.log('Less');
        break;
    case 100:
        console.log('More');
        break;
    case 50:
        console.log('Ok!');
        break;
    default:
        console.log('Miss');
        break;
}
*/

/*
const   hamburger  = 5,
        fries  = null;

if (hamburger && fries) {
    console.log("I'm full");
}

const   hamburger  = 3,
        fries  = 1,
        cola = 1;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'sfsdfs');
console.log('fdfd' && 1);

if (hamburger === 3 && cola === 1 && fries) {
    console.log("All are full");
} else {
    console.log("We are leaving!");
}
*/

/*
const   hamburger  = 3,
        fries  = 3,
        cola = 0,
        nuggets = 2;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("All are full");
} else {
    console.log("We are leaving!");
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);
*/

/*
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}
*/

/*
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`first lvl: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second lvl: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`third lvl: ${k}`);
        }
    }
}
*/

/*
// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    const done = ' - done';
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'string') {
        data[i] = data[i] + done;
        } else {
            data[i] = data[i]*2;
        }
    }
    console.log(data);
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    let j = data.length;
    for (let i = 0; i < data.length; i++) {
        result[i] = data[j];
        j--;
    }
    console.log(result);
    // Не трогаем
    return result;
}

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines-i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);


lines-1-result.length
*/

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); 