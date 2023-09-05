interface IBook {
    title: string,
    pageCount: number,
    genre: string[],
    authors: { name: string, age: number }[]
}
// ============================================================================ Additional 1 ============================================================================

// --створити масив з:
// - з 5 числових значень
let arr1: number[] = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let arr2: string[] = ['1', '2', '3', '4', '5'];
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr3: any = ['1', 2, true, 4, '5'];
for (let element of arr3) {
    console.log(element);
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4: any = [];
arr4[0] = 33;
arr4[1] = "33";
arr4[2] = true;
arr4[3] = "False";
console.log(arr4);
console.log('=======================================');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr5: any[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let index = 0;
while (index < arr5.length) {
    console.log(arr5[index]);
    index++
}
console.log('=======================================');

// 2. перебрати його циклом for
for (let number of arr5) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('=======================================');
let j: number = 0;
while (j < arr5.length) {
    if (j % 2) {
        console.log(arr5[j]);
    }
    j++
}
console.log('=======================================');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k: number = 0; k < arr5.length; k++) {
    if (k % 2) {
        console.log(arr5[k]);
    }
}
console.log('=======================================');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let x: number = 0;
while (x < arr5.length) {
    if (arr5[x] % 2 === 0) {
        console.log(arr5[x]);
    }
    x++
}
console.log('=======================================');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k: number = 0; k < arr5.length; k++) {
    if (!(k % 2)) {
        console.log(arr5[k]);
    }
}
console.log('=======================================');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let k: number = 0; k < arr5.length; k++) {
    if (!(arr5[k] % 3)) {
        arr5[k] = 'okten';
    }
}
console.log(arr5);
console.log('=======================================');

// 8. вивести масив в зворотньому порядку.
for (let k: number = arr5.length - 1; k >= 0; k--) {
    const arr5Element = arr5[k];
    console.log(arr5[k]);
}
console.log('=======================================');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
{
    let arr5: any[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

    let index: number = arr5.length - 1;
    while (index >= 0) {
        console.log(arr5[index]);
        index--
    }
    console.log('==================1=====================');
    for (let k: number = arr5.length - 1; k >= 0; k--) {
        console.log(arr5[k]);
    }
    console.log('==================2=====================');
    let j: number = arr5.length - 1;
    while (j > 0) {
        if (j % 2) {
            console.log(arr5[j]);
        }
        j--
    }
    console.log('===================3====================');
    for (let k: number = arr5.length; k > 0; k--) {
        if (k % 2) {
            console.log(arr5[k]);
        }
    }
    console.log('====================4===================');
    let x: number = arr5.length - 1;
    while (x >= 0) {
        if (!(x % 2)) {
            console.log(arr5[x]);
        }
        x--
    }
    console.log('====================5===================');
    for (let k: number = arr5.length - 1; k >= 0; k--) {
        if (!(k % 2)) {
            console.log(arr5[k]);
        }
    }
    console.log('====================6===================');
    for (let k: number = arr5.length - 1; k >= 0; k--) {
        if (!(arr5[k] % 3)) {
            arr5[k] = 'okten';
        }
    }
    console.log(arr5);
    console.log('=====================7==================');
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mass1: number[] = [20, 170, 130, 60, 220, 310, 450, 660, 1000, -180];
for (const element of mass1) {
    console.log(element);
}
console.log('=======================================');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let mass2: string[] = ['20', '170', '130', '60', '220', '310', '450', '660', '1000', '-180'];
for (const element of mass2) {
    console.log(element);
}
console.log('=======================================');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mass3: any = ['dfgdf', 354, true, null, '220', 6754, false, '660', undefined, '-'];
for (const mass3Element of mass3) {
    console.log(mass3Element);
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mass4: any = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];
for (let k: number = 0; k < mass4.length; k++) {
    const mass4Element = mass4[k];
    if (typeof (mass4Element) === "boolean") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let k: number = 0; k < mass4.length; k++) {
    const mass4Element = mass4[k];
    if (typeof (mass4Element) === "number") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let k: number = 0; k < mass4.length; k++) {
    const mass4Element = mass4[k];
    if (typeof (mass4Element) === "string") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr44: any = [];
arr44[0] = 33;
arr44[1] = "33";
arr44[2] = true;
arr44[3] = "False";
for (let i: number = 0; i < arr44.length; i++) {
    console.log(arr44[i]);
}
console.log('=======================================');

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k: number = 0; k < 10; k++) {
    console.log(k);
    document.write(`<h3>${k}</h3>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k: number = 0; k < 100; k++) {
    console.log(k);
    document.write(`<h3>${k}</h3>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k: number = 0; k < 100; k += 2) {
    console.log(k);
    document.write(`<h3>${k}</h3>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k: number = 0; k < 100; k++) {
    if (!(k % 2)) {
        console.log(k);
        document.write(`<h3>${k}</h3>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k: number = 0; k < 100; k++) {
    if (k % 2) {
        console.log(k);
        document.write(`<h3>${k}</h3>`);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books: IBook[] = [
    {
        title: 'HarryPotter and cup of whisky',
        pageCount: 80,
        genre: ['fantasy', 'artistic', 'comedy'],
        authors: [{name: 'Author name1', age: 29}, {name: 'Author name2', age: 30}]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'fantasy'],
        authors: [{name: 'Author name1', age: 32}]
    },
    {
        title: 'TomasSoer',
        pageCount: 190,
        genre: ['artistic'],
        authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
];
// -знайти наібльшу книжку.
let largestBook: IBook = books[0];
for (let i = 0; i < books.length; i++) {
    if (books[i].pageCount > largestBook.pageCount) {
        largestBook = books[i];
    }
}
console.log("Найбільша книга:", largestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let largestBookGenre: IBook = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].genre.length > largestBookGenre.genre.length) {
        largestBookGenre = books[k];
    }
}
console.log("Найбільша книга за кількістю жанрів:", largestBookGenre);

// - знайти книжку/ки з найдовшою назвою
let largestBookLength: IBook = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].title.length > largestBookLength.title.length) {
        largestBookLength = books[k];
    }
}
console.log("Найбільша книга по назві:", largestBookLength);
// - знайти книжку/ки які писали 2 автори
let largestBookAuthors: IBook = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].authors.length > largestBookAuthors.authors.length) {
        largestBookAuthors = books[k];
    }
}
console.log("Найбільша книга за кількістю авторів:", largestBookAuthors);
// - знайти книжку/ки які писав 1 автор
let largestBookAuthors2: IBook = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].authors.length < largestBookAuthors2.authors.length) {
        largestBookAuthors2 = books[k];
    }
}
console.log("Найменьша книга за кількістю авторів:", largestBookAuthors2);

