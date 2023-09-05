// ============================================================================ Additional 1 ============================================================================
// --створити масив з:
// - з 5 числових значень
var arr1 = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
var arr2 = ['1', '2', '3', '4', '5'];
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
var arr3 = ['1', 2, true, 4, '5'];
for (var _i = 0, arr3_1 = arr3; _i < arr3_1.length; _i++) {
    var element = arr3_1[_i];
    console.log(element);
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
var arr4 = [];
arr4[0] = 33;
arr4[1] = "33";
arr4[2] = true;
arr4[3] = "False";
console.log(arr4);
console.log('=======================================');
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
var arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
var index = 0;
while (index < arr5.length) {
    console.log(arr5[index]);
    index++;
}
console.log('=======================================');
// 2. перебрати його циклом for
for (var _a = 0, arr5_1 = arr5; _a < arr5_1.length; _a++) {
    var number = arr5_1[_a];
    console.log(number);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('=======================================');
var j = 0;
while (j < arr5.length) {
    if (j % 2) {
        console.log(arr5[j]);
    }
    j++;
}
console.log('=======================================');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (var k = 0; k < arr5.length; k++) {
    if (k % 2) {
        console.log(arr5[k]);
    }
}
console.log('=======================================');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
var x = 0;
while (x < arr5.length) {
    if (arr5[x] % 2 === 0) {
        console.log(arr5[x]);
    }
    x++;
}
console.log('=======================================');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (var k = 0; k < arr5.length; k++) {
    if (!(k % 2)) {
        console.log(arr5[k]);
    }
}
console.log('=======================================');
// 7. замінити кожне число кратне 3 на слово "okten"
for (var k = 0; k < arr5.length; k++) {
    if (!(arr5[k] % 3)) {
        arr5[k] = 'okten';
    }
}
console.log(arr5);
console.log('=======================================');
// 8. вивести масив в зворотньому порядку.
for (var k = arr5.length - 1; k >= 0; k--) {
    var arr5Element = arr5[k];
    console.log(arr5[k]);
}
console.log('=======================================');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
{
    var arr5_2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
    var index_1 = arr5_2.length - 1;
    while (index_1 >= 0) {
        console.log(arr5_2[index_1]);
        index_1--;
    }
    console.log('==================1=====================');
    for (var k = arr5_2.length - 1; k >= 0; k--) {
        console.log(arr5_2[k]);
    }
    console.log('==================2=====================');
    var j_1 = arr5_2.length - 1;
    while (j_1 > 0) {
        if (j_1 % 2) {
            console.log(arr5_2[j_1]);
        }
        j_1--;
    }
    console.log('===================3====================');
    for (var k = arr5_2.length; k > 0; k--) {
        if (k % 2) {
            console.log(arr5_2[k]);
        }
    }
    console.log('====================4===================');
    var x_1 = arr5_2.length - 1;
    while (x_1 >= 0) {
        if (!(x_1 % 2)) {
            console.log(arr5_2[x_1]);
        }
        x_1--;
    }
    console.log('====================5===================');
    for (var k = arr5_2.length - 1; k >= 0; k--) {
        if (!(k % 2)) {
            console.log(arr5_2[k]);
        }
    }
    console.log('====================6===================');
    for (var k = arr5_2.length - 1; k >= 0; k--) {
        if (!(arr5_2[k] % 3)) {
            arr5_2[k] = 'okten';
        }
    }
    console.log(arr5_2);
    console.log('=====================7==================');
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
var mass1 = [20, 170, 130, 60, 220, 310, 450, 660, 1000, -180];
for (var _b = 0, mass1_1 = mass1; _b < mass1_1.length; _b++) {
    var element = mass1_1[_b];
    console.log(element);
}
console.log('=======================================');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
var mass2 = ['20', '170', '130', '60', '220', '310', '450', '660', '1000', '-180'];
for (var _c = 0, mass2_1 = mass2; _c < mass2_1.length; _c++) {
    var element = mass2_1[_c];
    console.log(element);
}
console.log('=======================================');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
var mass3 = ['dfgdf', 354, true, null, '220', 6754, false, '660', undefined, '-'];
for (var _d = 0, mass3_1 = mass3; _d < mass3_1.length; _d++) {
    var mass3Element = mass3_1[_d];
    console.log(mass3Element);
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
var mass4 = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];
for (var k = 0; k < mass4.length; k++) {
    var mass4Element = mass4[k];
    if (typeof (mass4Element) === "boolean") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (var k = 0; k < mass4.length; k++) {
    var mass4Element = mass4[k];
    if (typeof (mass4Element) === "number") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (var k = 0; k < mass4.length; k++) {
    var mass4Element = mass4[k];
    if (typeof (mass4Element) === "string") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
var arr44 = [];
arr44[0] = 33;
arr44[1] = "33";
arr44[2] = true;
arr44[3] = "False";
for (var i = 0; i < arr44.length; i++) {
    console.log(arr44[i]);
}
console.log('=======================================');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (var k = 0; k < 10; k++) {
    console.log(k);
    document.write("<h3>".concat(k, "</h3>"));
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (var k = 0; k < 100; k++) {
    console.log(k);
    document.write("<h3>".concat(k, "</h3>"));
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (var k = 0; k < 100; k += 2) {
    console.log(k);
    document.write("<h3>".concat(k, "</h3>"));
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (var k = 0; k < 100; k++) {
    if (!(k % 2)) {
        console.log(k);
        document.write("<h3>".concat(k, "</h3>"));
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (var k = 0; k < 100; k++) {
    if (k % 2) {
        console.log(k);
        document.write("<h3>".concat(k, "</h3>"));
    }
}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
var books = [
    {
        title: 'HarryPotter and cup of whisky',
        pageCount: 80,
        genre: ['fantasy', 'artistic', 'comedy'],
        authors: [{ name: 'Author name1', age: 29 }, { name: 'Author name2', age: 30 }]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'fantasy'],
        authors: [{ name: 'Author name1', age: 32 }]
    },
    {
        title: 'TomasSoer',
        pageCount: 190,
        genre: ['artistic'],
        authors: [{ name: 'Author name1', age: 45 }, { name: 'Author name2', age: 19 }, { name: 'Author name3', age: 28 }]
    },
];
// -знайти наібльшу книжку.
var largestBook = books[0];
for (var i = 0; i < books.length; i++) {
    if (books[i].pageCount > largestBook.pageCount) {
        largestBook = books[i];
    }
}
console.log("Найбільша книга:", largestBook);
// - знайти книжку/ки з найбільшою кількістю жанрів
var largestBookGenre = books[0];
for (var k = 0; k < books.length; k++) {
    if (books[k].genre.length > largestBookGenre.genre.length) {
        largestBookGenre = books[k];
    }
}
console.log("Найбільша книга за кількістю жанрів:", largestBookGenre);
// - знайти книжку/ки з найдовшою назвою
var largestBookLength = books[0];
for (var k = 0; k < books.length; k++) {
    if (books[k].title.length > largestBookLength.title.length) {
        largestBookLength = books[k];
    }
}
console.log("Найбільша книга по назві:", largestBookLength);
// - знайти книжку/ки які писали 2 автори
var largestBookAuthors = books[0];
for (var k = 0; k < books.length; k++) {
    if (books[k].authors.length > largestBookAuthors.authors.length) {
        largestBookAuthors = books[k];
    }
}
console.log("Найбільша книга за кількістю авторів:", largestBookAuthors);
// - знайти книжку/ки які писав 1 автор
var largestBookAuthors2 = books[0];
for (var k = 0; k < books.length; k++) {
    if (books[k].authors.length < largestBookAuthors2.authors.length) {
        largestBookAuthors2 = books[k];
    }
}
console.log("Найменьша книга за кількістю авторів:", largestBookAuthors2);
