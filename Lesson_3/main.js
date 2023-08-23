// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello</div>`);
}
document.write(`<br>`);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} Hello</div>`);
}
document.write(`<br>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h2>Lorem</h2>`);
    i++;
}
document.write(`<br>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i < 20) {
    document.write(`<h2>${i} Lorem2</h2>`);
    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:=
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

document.write(`<ul>`)
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// -----------------------------------------------
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     document.write(`<div>
//          <h3 class="product-title">${product.title}.Price - ${product.price}</h3>
//          <img src=${product.image} alt="" class="product-image">
//     </div>`);
// }
for (const product of products) {
    document.write(`<div>
         <h3 class="product-title">${product.title}.Price - ${product.price}</h3>
         <img src=${product.image} alt="" class="product-image">
    </div>`);
}

// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

document.write(`<h2>Користувачі True</h2>`)
for (const user of users) {
    if (user.status) {
        document.write(`<h4>${user.name} ${user.age} - ${user.status}</h4>`)
    }
}

document.write(`<h2>Користувачі False</h2>`)
for (const user of users) {
    if (!user.status) {
        document.write(`<h4>${user.name} ${user.age} - ${user.status}</h4>`)
    }
}

document.write(`<h2>Користувачі > 30</h2>`)
for (const user of users) {
    if (user.age > 30) {
        document.write(`<h4>${user.name} ${user.age} - ${user.status}</h4>`)
    }
}

// ДОДАТКОВІ

// --створити масив з:
// - з 5 числових значень
let arr1 = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let arr2 = ['1', '2', '3', '4', '5'];
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr3 = ['1', 2, true, 4, '5'];
for (let element of arr3) {
    console.log(element);
}
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
arr4[0] = 33;
arr4[1] = "33";
arr4[2] = true;
arr4[3] = "False";
console.log(arr4);
console.log('=======================================');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
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
let j = 0;
while (j < arr5.length) {
    if (j % 2) {
        console.log(arr5[j]);
    }
    j++
}
console.log('=======================================');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < arr5.length; k++) {
    if (k % 2) {
        console.log(arr5[k]);
    }
}
console.log('=======================================');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let x = 0;
while (x < arr5.length) {
    if (!(x % 2)) {
        console.log(arr5[x]);
    }
    x++
}
console.log('=======================================');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < arr5.length; k++) {
    if (!(k % 2)) {
        console.log(arr5[k]);
    }
}
console.log('=======================================');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let k = 0; k < arr5.length; k++) {
    if (!(arr5[k] % 3)) {
        arr5[k] = 'okten';
    }
}
console.log(arr5);
console.log('=======================================');

// 8. вивести масив в зворотньому порядку.
for (let k = arr5.length - 1; k >= 0; k--) {
    const arr5Element = arr5[k];
    console.log(arr5[k]);
}
console.log('=======================================');

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
{
    let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

    let index = arr5.length - 1;
    while (index >= 0) {
        console.log(arr5[index]);
        index--
    }
    console.log('==================1=====================');
    for (let k = arr5.length - 1; k >= 0; k--) {
        console.log(arr5[k]);
    }
    console.log('==================2=====================');
    let j = arr5.length - 1;
    while (j > 0) {
        if (j % 2) {
            console.log(arr5[j]);
        }
        j--
    }
    console.log('===================3====================');
    for (let k = arr5.length; k > 0; k--) {
        if (k % 2) {
            console.log(arr5[k]);
        }
    }
    console.log('====================4===================');
    let x = arr5.length - 1;
    while (x >= 0) {
        if (!(x % 2)) {
            console.log(arr5[x]);
        }
        x--
    }
    console.log('====================5===================');
    for (let k = arr5.length - 1; k >= 0; k--) {
        if (!(k % 2)) {
            console.log(arr5[k]);
        }
    }
    console.log('====================6===================');
    for (let k = arr5.length - 1; k >= 0; k--) {
        if (!(arr5[k] % 3)) {
            arr5[k] = 'okten';
        }
    }
    console.log(arr5);
    console.log('=====================7==================');
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mass1 = [20, 170, 130, 60, 220, 310, 450, 660, 1000, -180];
for (const element of mass1) {
    console.log(element);
}
console.log('=======================================');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let mass2 = ['20', '170', '130', '60', '220', '310', '450', '660', '1000', '-180'];
for (const element of mass2) {
    console.log(element);
}
console.log('=======================================');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mass3 = ['dfgdf', 354, true, null, '220', 6754, false, '660', undefined, '-'];
for (const mass3Element of mass3) {
    console.log(mass3Element);
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mass4 = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];
for (let k = 0; k < mass4.length; k++) {
    const mass4Element = mass4[k];
    if (typeof (mass4Element) === "boolean") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let k = 0; k < mass4.length; k++) {
    const mass4Element = mass4[k];
    if (typeof (mass4Element) === "number") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let k = 0; k < mass4.length; k++) {
    const mass4Element = mass4[k];
    if (typeof (mass4Element) === "string") {
        console.log(mass4Element);
    }
}
console.log('=======================================');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 10; k++) {
    console.log(k);
    document.write(`<h3>${k}</h3>`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k++) {
    console.log(k);
    document.write(`<h3>${k}</h3>`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k += 2) {
    console.log(k);
    document.write(`<h3>${k}</h3>`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (!(k % 2)) {
        console.log(k);
        document.write(`<h3>${k}</h3>`);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 0; k < 100; k++) {
    if (k % 2) {
        console.log(k);
        document.write(`<h3>${k}</h3>`);
    }
}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
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
let largestBook = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].pageCount > largestBook.pageCount){
        largestBook = books[k];
    }
}
console.log("Найбільша книга:", largestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
let largestBookGenre = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].genre.length > largestBookGenre.genre.length){
        largestBookGenre = books[k];
    }
}
console.log("Найбільша книга за кількістю жанрів:", largestBookGenre);
// - знайти книжку/ки з найдовшою назвою
let largestBookLength = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].title.length > largestBookLength.title.length){
        largestBookLength = books[k];
    }
}
console.log("Найбільша книга по назві:", largestBookLength);
// - знайти книжку/ки які писали 2 автори
let largestBookAuthors = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].authors.length > largestBookAuthors.authors.length){
        largestBookAuthors = books[k];
    }
}
console.log("Найбільша книга за кількістю авторів:", largestBookAuthors);
// - знайти книжку/ки які писав 1 автор
let largestBookAuthors2 = books[0];
for (let k = 0; k < books.length; k++) {
    if (books[k].authors.length < largestBookAuthors2.authors.length){
        largestBookAuthors2 = books[k];
    }
}
console.log("Найменьша книга за кількістю авторів:", largestBookAuthors2);