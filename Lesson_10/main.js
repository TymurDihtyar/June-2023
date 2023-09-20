// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1 = document.forms.namedItem('in1');
form1.onsubmit = function (e) {
    e.preventDefault();
    document.querySelector('.target').innerHTML = `${this.name.value} ${this.sruname.value} ${this.age.value}`;
}
// let but1 = document.querySelector('.button')
// but1.onclick = function (e) {
//     e.preventDefault()
//     document.querySelector('.target').innerHTML = `${form1.name.value} ${form1.sruname.value} ${form1.age.value}`;
// }

//===============================================================================================================================================================================
// Є сторінка, на якій є блок, в якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let value = localStorage.getItem('num');
(value === null) ? value = 0 : value = JSON.parse(value) + 1;
localStorage.setItem('num', value);
document.querySelector('.number').innerHTML = value;

//===============================================================================================================================================================================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

let date = new Date()
let arrayWithDat = JSON.parse(localStorage.getItem('usersDate')) || [];
arrayWithDat.push(date)
localStorage.setItem('usersDate', JSON.stringify(arrayWithDat))

//===============================================================================================================================================================================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let users = [];
for (let i = 0; i < 100; i++) {
    users.push({name: 'User_' + i, age: i + 10, id: i + 1})
}

let info = document.querySelector('.cards');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

// let startIterator = 0;
// let itemOnPage = 10;
//
// function display(page) {
//     info.innerHTML = '';
//     for (let i = page; i < page + itemOnPage; i++) {
//         let h1 = document.createElement('h1')
//         h1.innerHTML = `${users[i].name} / age - ${users[i].age}  / id - ${users[i].id}`
//         info.appendChild(h1);
//     }
// }
// display(startIterator)
// prev.onclick = function () {
//     if (startIterator === 0) {
//         startIterator = 0;
//         display(startIterator)
//     } else {
//         startIterator -= 10;
//         display(startIterator)
//     }
// }
// next.onclick = function () {
//     if (startIterator === 90) {
//         startIterator = 90;
//         display(startIterator)
//     } else {
//         startIterator += 10;
//         display(startIterator)
//     }
// }

let currentPage = 1;
let itemsInPage = 10;

function displayItems(page) {
    info.innerHTML = ''
    let startIndex = (page - 1) * itemsInPage;
    let endIndex = startIndex + itemsInPage;

    let currentMass = users.slice(startIndex, endIndex)
    currentMass.forEach(item => {
        let h1 = document.createElement('h1')
        h1.innerHTML = JSON.stringify(item)  //`${item.name} / age - ${item.age}  / id - ${item.id}`
        info.appendChild(h1)
    })
}

displayItems(currentPage);

prev.onclick = function () {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
    }
}

next.onclick = function () {
    let totalPages = users.length / itemsInPage;
    if (currentPage < totalPages) {
        currentPage++;
        displayItems(currentPage);
    }
}

//===============================================================================================================================================================================
//  Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let hide = document.querySelector('.hide');
let click = false;
hide.onclick = function () {
    let hideElement = document.querySelector('#text')
    if (!click) {
        hideElement.style.display = 'none'
        this.innerText = 'show'
    } else {
        hideElement.style.display = 'block'
        this.innerText = 'hidde'
    }
    click = !click
}

//===============================================================================================================================================================================
// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let sub = document.querySelector('.submit');
sub.onclick = function () {
    let value = +document.querySelector('#submit').value
    if (value < 18) {
        alert('Тобі немає 18 років')
    }
}


//===============================================================================================================================================================================
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tabelConteiner = document.querySelector('.tabelConteiner')
let form2 = document.forms.namedItem('in2');

form2.onsubmit = function (e) {
    e.preventDefault();
    tabelConteiner.innerHTML = '';
    let line = +this.line.value
    let column = +this.column.value
    let content = this.content.value
    let table = document.createElement('table');

    for (let i = 0; i < line; i++) {
        let rowns = document.createElement('tr')
        for (let j = 0; j < column; j++) {
            let column = document.createElement('td')
            column.classList.add('column')
            column.innerHTML = content;
            rowns.appendChild(column)
        }
        table.appendChild(rowns)
    }
    tabelConteiner.appendChild(table)
}

//===============================================================================================================================================================================
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, яке відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let moment = new Date().getTime()
let arrayWithGrn = JSON.parse(localStorage.getItem('grn')) || [{prise: 100, moment}];
let newPrice;
let lastItem = arrayWithGrn[arrayWithGrn.length - 1];
let timeDifference = moment - lastItem.moment;

(timeDifference > 10000) ? newPrice = lastItem.prise + 10 : newPrice = lastItem.prise;

arrayWithGrn.push({prise: newPrice, moment})
localStorage.setItem('grn', JSON.stringify(arrayWithGrn))
document.querySelector('.number2').innerHTML = `${newPrice}грн`;