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
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
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
        const   a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                b = prompt('На сколько оцените его?', '').trim();
    
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
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();
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

/*
function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function done() {
    console.log('I finished this lesson!');
}

learnJS('JavaScript', done);
*/

/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} have value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} have value ${options[key]}`);
//     }
// }

*/

/*
const arr = [2, 32, 26, 18, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside massive ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));
*/

/*
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Link to object

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

//const newNumbers = copy(numbers);

//newNumbers.a = 10;
//newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
console.log(Object.assign(numbers, add));
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'qwerty';
console.log(newArray);
console.log(oldArray);

const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'meta'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const   q = {
        one: 1,
        two: 2,
};

const newObj = {...q};

*/
/*
Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);
*/

/*
Задачи:

1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль

lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (typeof(arr[0]) != 'undefined') {
        let str = 'Семья состоит из: ';
        for (let i in family) {
            str += `${family[i]} `;
        }
        return(str);
    } else {
        let str = 'Семья пуста';
        return(str);
    }
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    arr.forEach(city => {
        console.log(city.toLowerCase())
    });
}

standardizeStrings(favoriteCities);
*/

/*

Продолжаем решение задач на массивы.

3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

Может показать сложной с первого взгляда, но это совсем не так 🙂

4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку


const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string') {
        return "Ошибка!";
    }
    return str.split('').reverse().join('');
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';


    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
*/

/*
let str = 'some';
let str_obj = new String(str);

// console.log(typeof(str));
// console.log(typeof(str_obj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
john.sayHello();
*/

/*
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                    b = prompt('На сколько оцените его?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done!');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '').trim();

            if (genre == '' || genre == null) {
                console.log('Incorrect data');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        // for (let i = 1; i < 2; i++) {
        //     let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
        //     if (genres == '' || genres == null) {
        //             console.log('Incorrect data');
        //             i--;
        //         } else {
        //             personalMovieDB.genres = genres.split(', ');
        //             personalMovieDB.genres.sort();
        //         }
    
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр ${i+1} - это ${item}`);
        // });
    }
};

*/

/*
Задача:

У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

- определение того, хватает ли бюджета на оплату такого объема;

- все числа идут без единиц измерения для упрощения, просто цифры и все;

- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0,
        volume = 0;
    
        data.shops.forEach(shop => {
            square += shop.width * shop.length;
        });

        volume = data.height * square;

        if (data.budget - (volume * data.moneyPer1m3) >= 0) {
            return 'Бюджета достаточно';
        } else {
            return 'Бюджета недостаточно';
        }
}
isBudgetEnough(shoppingMallData);

*/

/*
Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);
*/

/*
function hello() {
    console.log("Hello World");
    debugger;
}

hello();

function hi() {
    console.log('Say hi!');
}

hi();

const   arr = [1, 14, 4, 30, 54],
        sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted);
*/

/*
// To String
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
// 1)

console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To Boolean

// 0, '', null, undefined, NaN;
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"4444"));


// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger
*/

/*
function createCounter() {
    let counter = 0;

    const myFunction = function () { debugger
        counter = counter + 1; debugger
        return counter; debugger
    };

    return myFunction;
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);

const result = getSum(5, 6);
const getSum = function(a, b) {
    return a + b;
};
console.log(typeof(NaN));

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result);
*/

/*
// Какое будет выведено значение: 
let x = 5; alert( x++ ); ? // Ответ: 5

// Чему равно такое выражение: 
[ ] + false - null + true ? // Ответ: NaN

// Что выведет этот код: 
let y = 1; let x = y = 2; alert(x); ? // Ответ: 2

// Чему равна сумма 
[ ] + 1 + 2? // Ответ: 12 (пустой массив - как строка)

// Что выведет этот код: 
alert( "1"[0] )? // Ответ: 1 (Первый элемент строки "1" и есть "1")

// Чему равно 
2 && 1 && null && 0 && undefined ? //Ответ: null ("И" запинается на лжи)

// Есть ли разница между выражениями? 
!!( a && b ) и (a && b) // Разница есть. Оператор "!!" превращает любой тип данных в булиновый тип, а операция (a && b) возвращает "b"

// Что выведет этот код: 
alert( null || 2 && 3 || 4 ); // Ответ: 3. Потомучто сначала выполняется &&, а потом null (false) сравнивается c 3 (true). А ИЛИ запинается об правду 

// Правда ли что a == b ?
a = [1, 2, 3]; b = [1, 2, 3]; // Нет. Элементы массива равны, а сами массивы по своей сути разные

// Что выведет этот код?: 
alert( +"Infinity" ); // Этот код выведет "Infinity" с типом данных "Number"

// Верно ли сравнение: 
"Ёжик" > "яблоко"? // Нет. В ответе будет false. (см. таблицу unicode)

// Чему равно
0 || "" || 2 || undefined || true || falsе // Ответ: 2
*/

/*
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);
*/

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

pow(2, 1); // 2
pow(2, 2); // 4
pow(2, 3); // 8
pow(2, 4); // 16

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0,
        students = 0;
    
        for (let course of Object.values(data)) {
            if (Array.isArray(course)) {
                students += course.length;

                for (let i = 0; i < course.length; i++) {
                    total += course[i].progress;
                }
            } else {
                for (let subCourse of Object.values(course)) {
                    students += subCourse.length;

                    for (let i = 0; i < subCourse.length; i++) {
                        total += subCourse[i].progress;
                    }
                }
            }
        }
    return total / students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);