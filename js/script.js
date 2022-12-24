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

4) Потренироваться и переписать цикл еще двумя способами

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

*/

/*
let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(7, 8));

function ret() {
    let num = 50;
    return num;
}

const aNum = ret();
console.log(aNum);

const logger = function() {
    console.log("Hello!")
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};
*/

/*
const   usdCurr = 28;
const   discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr)
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);
*/

/*
// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return(arr);
}

// Место для третьей задачи
function getMathResult(num, ber) {
    if (typeof(ber) !== 'number'|| ber <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= ber; i++) {
        if (i === ber) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return(str);
};
*/

/*
const   str = "teSt",
        arr = [1, 2, 4];

console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello, world!";

console.log(logg.slice(7, 12));

console.log(logg.substring(7, 12));

console.log(logg.substr(7, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
*/

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
*/

/*
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Место для первой задачи
function calculateVolumeAndArea(len) {
    if (typeof(len) == 'number' && Number.isInteger(len) && len > 0) {
        let vol = len * len * len;
        let s = len * len * 6;
        console.log(`Объем куба: ${vol}, площадь всей поверхности: ${s}`);
    } else {
        console.log('При вычислении произошла ошибка');
    }
}

// Место для второй задачи
function getCoupeNumber(placeNum) {
    if (typeof(placeNum) !== 'number' || !Number.isInteger(placeNum) || placeNum < 0 ) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if (placeNum === 0 || placeNum > 36) {
        console.log("Таких мест в вагоне не существует");
    } else {
        console.log(Math.ceil(placeNum / 4));
    }
}
*/

/*
Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0


// Место для первой задачи
function getTimeFromMinutes(min) {
    if (typeof(min) !== 'number' || !Number.isInteger(min) || min < 0 ) {
        console.log("Ошибка, проверьте данные");
    } else {
        let hour = parseInt((min/60));
        let minut = min - hour * 60;
        let hourStr = '';
        let minStr = '';
        switch (hour) {
            case (hour % 10 === 1):
                hourStr = 'час';
                break;
            case (hour % 10 >= 2 && hour % 10 <= 4):
                hourStr = 'часа';
                break;
            default:
                hourStr = 'часов';
        }
        switch (minut) {
            case (minut % 10 === 1):
                minStr = 'минута';
                break;
            case (minut % 10 >= 2 && minut % 10 <= 4):
                minStr = 'минуты';
                break;
            default:
                minStr = 'минут';
        }
        return `Это ${hours} ${hoursStr} и ${minutes} ${minStr}`;
    }
}

// Место для второй задачи
function findMaxNumber(n1, n2, n3, n4) {
    let arr = [n1, n2, n3, n4];
    let flag = true;
    for (let i = 0; i < 4; i++) {
        if (typeof(arr[i]) != 'number') {
            flag = false;
        }
    }
    if (flag === true) {
        console.log(Math.max.apply(null, arr));
    } else {
        console.log(0);
    }
}
*/

/*
Задача:
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;
    let third;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `
        }

        third = first + second;
        first = second;
        second = third;
    }
    return result;
}
*/

