// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a1 = 'hello world';
let a2 = 'lorem ipsum';
let a3 = 'javascript is cool';

console.log(a1.length);
console.log(a2.length);
console.log(a3.length);

//===================================================================================================================================================================//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(a1.toUpperCase());
console.log(a2.toUpperCase());
console.log(a3.toUpperCase());

//===================================================================================================================================================================//
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
a1 = 'HELLO WORLD';
a2 = 'LOREM IPSUM';
a3 = 'JAVASCRIPT IS COOL';

console.log(a1.toLowerCase());
console.log(a2.toLowerCase());
console.log(a3.toLowerCase());

//===================================================================================================================================================================//
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

//===================================================================================================================================================================//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str1); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));

//===================================================================================================================================================================//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(array.map(value => value.toString()));

//===================================================================================================================================================================//
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3, 55, 66, 1, 8];
let sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending' :
            nums.sort((a, b) => a - b);
            break;
        case 'descending' :
            nums.sort((a, b) => b - a);
            break;
        default :
            return 'Wrong direction';
    }
    return nums;
}
console.log(sortNums(nums, 'ascending'));
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

//===================================================================================================================================================================//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let result1 = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(result1);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let result2 = coursesAndDurationArray.map((item, index) => {
    return {
        id: index, title: item.title, monthDuration: item.monthDuration
    };
})
console.log(result2);

//===================================================================================================================================================================//
// описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let desk = [
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'}, {cardSuit: 'spade', value: 'ace', color: 'black'},];

// - знайти піковий туз
let aceSpade = desk.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log(aceSpade);

// - знайти всі шістки
let allSixes = desk.filter(card => card.value === '6')
console.log(allSixes);

// - знайти всі червоні карти
let allRed = desk.filter(card => card.color === 'red')
console.log(allRed);

// - знайти всі буби
let allDimomds = desk.filter(card => card.cardSuit === 'diamond')
console.log(allDimomds);

// - знайти всі трефи від 9 та більше
let allClubsGreater9 = desk.filter(card => card.cardSuit === 'clubs' && (card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace'))
console.log(allClubsGreater9);

//===================================================================================================================================================================//
//     Взяти описану колоду карт, та за допомогою reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let pockedDesk = desk.reduce((acum, card) => {
    if (card.cardSuit === 'diamond') {
        acum.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        acum.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        acum.clubs.push(card)
    } else if (card.cardSuit === 'spade') {
        acum.spades.push(card)
    }
    return acum;
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(pockedDesk);

//===================================================================================================================================================================//
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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

// --написати пошук всіх об'єктів, в який в modules є сss
let cssArr = coursesArray.filter(curs => curs.modules.includes('css'))
console.log(cssArr);

// --написати пошук всіх об'єктів, в який в modules є docker
let dockerArr = coursesArray.filter(curs => curs.modules.includes('docker'))
console.log(dockerArr);
