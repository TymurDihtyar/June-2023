// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.innerHTML = 'dfsdgfdgdfgdfg'
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'coral';
div.style.fontSize = '32px';
let divClone = div.cloneNode(true);
document.body.append(div, divClone)

// =============================================================================================================================
// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let mass = ['Main', 'Products', 'About us', 'Contacts'];
let ul1 = document.createElement('ul');
document.body.append(ul1);

// for (const l1Element of mass) {
//     let li = document.createElement('li');
//     li.innerHTML = `${l1Element}`;
//     ul1.appendChild(li);
// }
mass.forEach(item => {
    let li = document.createElement('li');
    li.innerHTML = `${item}`;
    ul1.appendChild(li);
})

// =============================================================================================================================
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {
    title: 'Java Complex',
    monthDuration: 6
}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {
    title: 'FullStack',
    monthDuration: 7
}, {title: 'Frontend', monthDuration: 4}];

for (const ArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerHTML = `<hr> title - ${ArrayElement.title} <br> monthDuration - ${ArrayElement.monthDuration} <hr>`
    document.body.appendChild(div);
}

// =============================================================================================================================
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const ArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item')

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = `title - ${ArrayElement.title}`

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerHTML = `monthDuration - ${ArrayElement.monthDuration}`;

    div.append(h1, p);
    document.body.appendChild(div);
}

// =============================================================================================================================
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
}, {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
}, {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
}, {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
}, {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
},];


let divAll = document.createElement('div');
divAll.classList.add('all')
document.body.appendChild(divAll)
simpsons.forEach(person => {
    let div = document.createElement('div');
    div.classList.add('member');

    let h2 = document.createElement('h2');
    h2.innerHTML = `${person.name} ${person.surname} age: ${person.age}`;

    let img = document.createElement('img');
    img.src = person.photo;
    img.alt = '';

    let p = document.createElement('p');
    p.innerHTML = `${person.info}`;

    div.append(h2, img, p);
    document.body.appendChild(div);
    divAll.appendChild(div)

})

// =============================================================================================================================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
let coursesArray = [
    {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
}, {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
}, {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
}, {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
}, {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
}, {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}];


for (const ArrayElement of coursesArray) {

    let courses = document.createElement('div');
    courses.classList.add('courses')
    document.body.appendChild(courses);

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = `${ArrayElement.title.toUpperCase()}`

    let monthDuration = document.createElement('div');
    monthDuration.classList.add('monthDuration');
    monthDuration.innerHTML = `monthDuration - ${ArrayElement.monthDuration}`

    let hourDuration = document.createElement('div');
    hourDuration.classList.add('hourDuration');
    hourDuration.innerHTML = `hourDuration - ${ArrayElement.hourDuration}`

    let modules = document.createElement('div');
    modules.classList.add('modules');
    let ul2 = document.createElement('ul');

    ArrayElement.modules.forEach(item => {
        let li = document.createElement('li');
        li.innerHTML = `${item}`;
        ul2.appendChild(li);
    })

    modules.appendChild(ul2);
    courses.append(title, monthDuration, hourDuration, modules);
}

// =============================================================================================================================

// let arr = Array.from(document.querySelectorAll('.item-grid-card--show-meta'));
// let newArr = arr.map(element => {
//     return {
//         title: element.querySelector('.item-grid-card__title').innerText,
//         author: element.querySelector('.item-grid-music-preview__author').innerText,
//         mp3: element.querySelector('audio').getAttribute('src')
//     }
// })
// console.log(newArr);
let arr = Array.from(document.querySelectorAll('.item-grid-card--show-meta'));
let newArr = arr.map(element => {
    return {
        title: element.querySelector('.item-grid-card__title').innerText,
        author: element.querySelector('.item-grid-music-preview__author').innerText,
        mp3: element.getElementsByTagName('audio')[0].src
    }
})
console.log(newArr);


