// 1. Створити пустий масив та :
var array = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (var i_1 = 0; i_1 < 50; i_1++) {
    array[i_1] = Math.ceil(Math.random() * 101) * 2;
}
console.log('============array парні==================');
console.log(array);
//     b. заповнити його 50 непарними числами за допомоги циклу.
for (var i_2 = 0; i_2 < 50; i_2++) {
    var random = Math.ceil(Math.random() * 101);
    if (!(random % 2)) {
        random++;
    }
    array[i_2] = random;
}
console.log('============array не парні==================');
console.log(array);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
var array2 = [];
for (var i_3 = 0; i_3 < 20; i_3++) {
    array2[i_3] = Math.ceil(Math.random() * 100);
}
console.log('============array2 рандом==================');
console.log(array2);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
var array3 = [];
for (var i_4 = 0; i_4 < 20; i_4++) {
    var min = 8;
    var max = 732;
    array3[i_4] = Math.ceil(Math.random() * (max - min) + min);
}
console.log('============array3 в діапазоні 8 - 732==================');
console.log(array3);
// 2. Вивести за допомогою console.log кожен третій елемен
for (var i_5 = 2; i_5 < array2.length; i_5 += 3) {
    console.log(array3[i_5]);
}
console.log('==============================');
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (var i_6 = 2; i_6 < array3.length; i_6 += 3) {
    if (!(array3[i_6] % 2)) {
        console.log(array3[i_6]);
    }
}
console.log('==============================');
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масивє
var array4 = [];
for (var i_7 = 2; i_7 < array3.length; i_7 += 3) {
    if (!(array3[i_7] % 2)) {
        array4[array4.length] = array3[i_7];
    }
}
console.log(array4);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
var array5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (var i_8 = 0; i_8 < array5.length; i_8++) {
    if (array5[i_8 + 1] % 2 === 0) {
        console.log(array5[i_8]);
    }
}
console.log('==============================');
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
var array6 = [100, 250, 50, 168, 120, 345, 188];
var sum = 0;
for (var _i = 0, array6_1 = array6; _i < array6_1.length; _i++) {
    var number = array6_1[_i];
    sum += number;
}
var midCost = sum / array6.length;
console.log(midCost);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
var array7_1 = [];
var array7_2 = [];
for (var i_9 = 0; i_9 < 10; i_9++) {
    array7_1[i_9] = Math.ceil(Math.random() * 10);
    array7_2[i_9] = array7_1[i_9] * 5;
}
console.log('============array7 рандом*5==================');
console.log(array7_1);
console.log(array7_2);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
var array8_1 = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];
var array8_2 = [];
for (var _a = 0, array8_1_1 = array8_1; _a < array8_1_1.length; _a++) {
    var array8Element = array8_1_1[_a];
    if (typeof (array8Element) === 'number') {
        array8_2[array8_2.length] = array8Element;
    }
}
console.log(array8_2);
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
var usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];
var citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
var usersWithCities = [];
for (var _b = 0, usersWithId_1 = usersWithId; _b < usersWithId_1.length; _b++) {
    var user = usersWithId_1[_b];
    for (var _c = 0, citiesWithId_1 = citiesWithId; _c < citiesWithId_1.length; _c++) {
        var city = citiesWithId_1[_c];
        if (user.id === city.user_id) {
            usersWithCities[usersWithCities.length] = {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: city.user_id,
                    country: city.country,
                    city: city.city
                }
            };
        }
    }
}
console.log(usersWithCities);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
for (var _d = 0, array2_1 = array2; _d < array2_1.length; _d++) {
    var item = array2_1[_d];
    if (item % 2 === 0) {
        console.log(item);
    }
}
console.log(array2);
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
var arr = [];
for (var _e = 0, array2_2 = array2; _e < array2_2.length; _e++) {
    var arrElement = array2_2[_e];
    arr[arr.length] = arrElement;
}
console.log(arr);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
var mass = ['a', 'b', 'c'];
var word1 = "";
for (var j = 0; j < mass.length; j++) {
    word1 += mass[j];
}
console.log(word1);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
var i = 0;
var word2 = "";
while (i < mass.length) {
    word2 += mass[i];
    i++;
}
console.log(word2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
var word3 = "";
for (var _f = 0, mass_1 = mass; _f < mass_1.length; _f++) {
    var mas = mass_1[_f];
    word3 += mas;
}
console.log(word3);
