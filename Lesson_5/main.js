// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a, b) => {
    return a * b;
}
// let rectangle = (a, b) => a * b;
console.log('Perimeter Rectangle:', rectangle(10, 20));

//=============================================================================================//

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let Circle = (r) => Math.PI * Math.pow(r, 2);

console.log('Area Of Circle:', Circle(2));

//=============================================================================================//

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let Cylinder = (h, r) => {
    return Math.PI * Math.pow(r, 2) * h;
}
console.log('Area Of Сilinder:', Cylinder(3, 2));

//=============================================================================================//

// - створити функцію яка приймає масив та виводить кожен його елемент
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
    {name: 'max', age: 35, status: false}
];

let PrintArrElement = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

PrintArrElement(users);

//=============================================================================================//

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let PrintText = (text) => {
    document.write(`<p>${text}</p>`)
}

PrintText('loremd');

//=============================================================================================//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const PrintUl1 = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

PrintUl1('loremds2222');

//=============================================================================================//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const PrintUl2 = (text, numOfLi) => {
    document.write(`<ul>`)
    for (let i = 0; i < numOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

PrintUl2('loremlorem3', 3);

//=============================================================================================//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];

const PrintUl3 = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

PrintUl3(mass);

//=============================================================================================//

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];

const PrintUser = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<hr><div>ID:${array[i].id}<br>Name:${array[i].name}<br>Age: ${array[i].age}</div><hr>`)
    }
}

PrintUser(usersWithId);

//=============================================================================================//

// - створити функцію яка повертає найменьше число з масиву
let arrayRandom = [];
for (let i = 0; i < 20; i++) {
    arrayRandom[i] = Math.ceil(Math.random() * 100);
}

console.log(arrayRandom);

const MinNumber = (array) => {
    let minNumberArr = array[0];
    for (const Element of array) {
        if (minNumberArr > Element) {
            minNumberArr = Element;
        }
    }
    return minNumberArr;
}

console.log(MinNumber(arrayRandom));

//=============================================================================================//

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const SumOfNumberArr = (array) => {
    let sum = 0
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}

console.log(SumOfNumberArr(arrayRandom));

//=============================================================================================//

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let mass = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];

// function Swap(arr, index1, index2) {
//     let temporary = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temporary;
//     return arr;
// }
//
const Swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return arr;
}

console.log(Swap(mass, 1, 4));


//=============================================================================================//

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const Exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
    return console.log('невірна валюта');
}

console.log(Exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {
    currency: 'PL',
    value: 8
}], 'USD'));

//================================================================================= ДОДАТКОВІ =============================================================================================//

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
array = [1, 2, 3, 4, 5, 7, 8];
const ser = (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum / 2;
}
console.log(ser(array));

//=============================================================================================//

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const minValue = (...args) => {
    let max = args[0];
    let min = args[0];
    for (const arg of args) {
        if (arg < min) {
            min = arg;
        }
        if (arg > max) {
            max = arg;
        }
    }
    console.log(`Максимум `, max);
    return min;
}
console.log(`Мінімум `, minValue(10, 2, 3, 4, 5, 6, 7, 8, 9, -6));

//=============================================================================================//

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const randomArray = () => {
    let arrayRandom = [];
    for (let i = 0; i < 20; i++) {
        arrayRandom[i] = Math.ceil(Math.random() * 100);
    }
    return arrayRandom;
}
console.log(randomArray());

//=============================================================================================//

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

const randomArray2 = (numberOfElements)=>{
    let array = [];
    for (let i = 0; i < numberOfElements; i++) {
        array[array.length] = Math.round(Math.random()*100);
    }
    return array;
}
console.log(randomArray2(5));

//=============================================================================================//

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reverse = (array) => array.reverse()

console.log(reverse(array));