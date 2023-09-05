// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (var i_1 = 0; i_1 < 10; i_1++) {
    document.write("<div>Hello</div>");
}
document.write("<br>");
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (var i_2 = 0; i_2 < 10; i_2++) {
    document.write("<div>".concat(i_2, " Hello</div>"));
}
document.write("<br>");
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
var i = 0;
while (i < 20) {
    document.write("<h2>Lorem</h2>");
    i++;
}
document.write("<br>");
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i < 20) {
    document.write("<h2>".concat(i, " Lorem2</h2>"));
    i++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:=
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
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
document.write("<ul>");
for (var _i = 0, listOfItems_1 = listOfItems; _i < listOfItems_1.length; _i++) {
    var listOfItem = listOfItems_1[_i];
    document.write("<li>".concat(listOfItem, "</li>"));
}
document.write("</ul>");
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// -----------------------------------------------
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
var products = [
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
for (var _a = 0, products_1 = products; _a < products_1.length; _a++) {
    var product = products_1[_a];
    document.write("<div>\n         <h3 class=\"product-title\">".concat(product.title, ".Price - ").concat(product.price, "</h3>\n         <img src=").concat(product.image, " alt=\"\" class=\"product-image\">\n    </div>"));
}
// --------------------
//     є масив
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
document.write("<h2>\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 True</h2>");
for (var _b = 0, users_1 = users; _b < users_1.length; _b++) {
    var user = users_1[_b];
    if (user.status) {
        document.write("<h4>".concat(user.name, " ").concat(user.age, " - ").concat(user.status, "</h4>"));
    }
}
document.write("<h2>\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 False</h2>");
for (var _c = 0, users_2 = users; _c < users_2.length; _c++) {
    var user = users_2[_c];
    if (!user.status) {
        document.write("<h4>".concat(user.name, " ").concat(user.age, " - ").concat(user.status, "</h4>"));
    }
}
document.write("<h2>\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 > 30</h2>");
for (var _d = 0, users_3 = users; _d < users_3.length; _d++) {
    var user = users_3[_d];
    if (user.age > 30) {
        document.write("<h4>".concat(user.name, " ").concat(user.age, " - ").concat(user.status, "</h4>"));
    }
}
