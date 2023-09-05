// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function PerimeterRectangle(a, b) {
    return a * b;
}

let rectangle = PerimeterRectangle(10, 20);
console.log('Perimeter Rectangle:', rectangle);

//=============================================================================================//

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function AreaOfCircle(r) {
    return 3.14 * Math.pow(r, 2);
}

let Circle = AreaOfCircle(2);
console.log('Area Of Circle:', Circle);

//=============================================================================================//

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function AreaOfCilinder(h, r) {
    return 3.14 * Math.pow(r, 2) * h;
}

let Cylinder = AreaOfCilinder(3, 2);
console.log('Area Of Сilinder:', Cylinder);

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

function PrintArrElement(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

PrintArrElement(users);

//=============================================================================================//

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function PrintText(text) {
    document.write(`<p>${text}</p>`)
}

PrintText('loremdsfsdfsewrwrwer');

//=============================================================================================//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function PrintUl1(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

PrintUl1('loremdsfsdfsewrwrwer');

//=============================================================================================//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function PrintUl2(text, numOfLi) {
    document.write(`<ul>`)
    for (let i = 0; i < numOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

PrintUl2('loremlorem', 3);

//=============================================================================================//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = [false, 'dfgdf', 354, true, 'sdfsf', 6754, false, '6sdfsf0', true, 123];

function PrintUl3(array) {
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

function PrintUser(array) {
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

function MinNumber(array) {
    let minNumberArr = array[0];
    for (const Element of array) {
        if (minNumberArr > Element) {
            minNumberArr = Element;
        }
    }
    return minNumberArr;
}

let minNumberArr = MinNumber(arrayRandom);
console.log(minNumberArr);

//=============================================================================================//

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function SumOfNumberArr(array) {
    let sum = 0
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}

let sumOfNumber = SumOfNumberArr(arrayRandom);
console.log(sumOfNumber);

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
// [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
function Swap(arr, index1, index2) {
    arr.push(arr[index1])
    arr[index1] = arr[index2];
    arr[index2] =  arr[arr.length-1];
    arr.pop()
    return arr;
}

let newArr = Swap(mass, 1, 4);
console.log(newArr);


//=============================================================================================//

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function Exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
    return console.log('невірна валюта');
}

let convertedSum = Exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'PL', value: 8}], 'USD')
console.log(convertedSum);