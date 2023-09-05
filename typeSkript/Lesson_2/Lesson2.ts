interface IBook {
    title: string,
    pageCount: number,
    genre: string,
    authors?: [{ name: string, age: number }, { name: string, age: number }]
}

interface IUser {
    name: string,
    username: string,
    password: number,
}

// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr: any = ['hello', 'owu', 'com', 10, -999, 123, 3.14, 2.7, true, 32];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1: IBook = {
    title: 'HarryPotter',
    pageCount: 380,
    genre: 'fantasy'
};
let book2: IBook = {
    title: 'Astral',
    pageCount: 290,
    genre: 'horror'
};
let book3: IBook = {
    title: 'TomasSoer',
    pageCount: 420,
    genre: 'artistic'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4: IBook = {
    title: 'HarryPotter',
    pageCount: 380,
    genre: 'fantasy',
    authors: [
        {name: 'Author name', age: 34},
        {name: 'Author name', age: 34}
    ]
};
let book5: IBook = {
    title: 'Astral',
    pageCount: 290,
    genre: 'horror',
    authors: [
        {name: 'Author name', age: 34},
        {name: 'Author name', age: 34}
    ]
};
let book6: IBook = {
    title: 'TomasSoer',
    pageCount: 420,
    genre: 'artistic',
    authors: [
        {name: 'Author name', age: 34},
        {name: 'Author name', age: 34}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users: IUser[] = [
    {name: 'vasia', username: 'vasil', password: 123},
    {name: 'vasia', username: 'vasil', password: 456},
    {name: 'vasia', username: 'vasil', password: 789},
    {name: 'vasia', username: 'vasil', password: 101112},
    {name: 'vasia', username: 'vasil', password: 131415},
    {name: 'vasia', username: 'vasil', password: 161718},
    {name: 'vasia', username: 'vasil', password: 192021},
    {name: 'vasia', username: 'vasil', password: 222324},
    {name: 'vasia', username: 'vasil', password: 252627},
    {name: 'vasia', username: 'vasil', password: 282930},
    {name: 'vasia', username: 'vasil', password: 313233}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// for (let i = 0; i < arr.length; i++) {
//     console.log(users[i].password);
// }

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x: number;
x = 1;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
x = 0;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
x = -3;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
// let arrX = [1, 0, -3];
// for (let i = 0; i < arrX.length; i++) {
//     if (arrX[i] !== 0) {
//         console.log('Вірно');
//     } else {
//         console.log('Невірно');
//     }
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
let time:number = Math.ceil(Math.random() * 59);
console.log(time);
if (0 <= time && time <= 15) {
    console.log('перша половина');
} else if (16 <= time && time <= 30) {
    console.log('друга половина');
} else if (31 <= time && time <= 45) {
    console.log('третя половина');
} else if (46 <= time && time <= 59) {
    console.log('черверта половина');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day:number = Math.ceil(Math.random() * 31);
console.log(day);
if (1 <= day && day <= 10) {
    console.log('перша половина');
} else if (11 <= day && day <= 20) {
    console.log('друга половина');
} else if (21 <= day && day <= 31) {
    console.log('третя половина');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfWeek:number = +prompt('enter day of week');
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default :
        console.log('enter day of week');
}
// document.getElementById('button').onclick = function () {
//     let dayOfWeek:number = +document.getElementById('dayOfWeek').value;
//     switch (dayOfWeek) {
//         case 1:
//             document.getElementById('plan').innerHTML = 'Пракрика1 JS';
//             console.log('Пракрика1 JS');
//             break;
//         case 2:
//             document.getElementById('plan').innerHTML = 'Лекція1 JS';
//             console.log('Лекція1 JS');
//             break;
//         case 3:
//             document.getElementById('plan').innerHTML = 'Пракрика2 JS';
//             console.log('Пракрика2 JS');
//             break;
//         case 4:
//             document.getElementById('plan').innerHTML = 'Лекція2 JS';
//             console.log('Лекція2 JS');
//             break;
//         case 5:
//             document.getElementById('plan').innerHTML = 'Додаткове JS';
//             console.log('Додаткове JS');
//             break;
//         case 6:
//             document.getElementById('plan').innerHTML = 'Англійська';
//             console.log('Англійська');
//             break;
//         case 7:
//             document.getElementById('plan').innerHTML = 'Відпочинок';
//             console.log('Відпочинок');
//             break;
//     }
// }

// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
let number1 = Math.ceil(Math.random() * 1000);
console.log(number1);
let number2 = Math.ceil(Math.random() * 1000);
console.log(number2);
if (number1 > number2) {
    console.log('перше число:', number1);
} else if (number1 < number2) {
    console.log('друге число:', number2);
} else if (number1 === number2) {
    console.log('Числа рівні', number1, number2);
}

// const firstUserNum = +prompt('Введіть перше число') || 100;
// const secondUserNum = +prompt('Введіть друге число') || 50;
// firstUserNum === secondUserNum ? console.log('Числа рівні') :
//     firstUserNum < secondUserNum ? console.log('Друге число більше') : console.log('Перше число більше');

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомогою  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1:any;
x1 = '';
if (x1 === '' || x1 === null || x1 === undefined || x1 === 0 || x1 === false) {
    x1 = 'default'
}
console.log(x);
// let x = 0;
// x = x || "default";
// console.log(x);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray:{title:string, monthDuration:number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title}: Супер`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title}: Супер`);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title}: Супер`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title}: Супер`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title}: Супер`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title}: Супер`);
}
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log(`${coursesAndDurationArray[i].title}: Супер`);
//     }
// }
// for (const course of coursesAndDurationArray) {
//     if (course.monthDuration > 5) {
//         console.log(`${course.title}: Супер`);
//     }
// }