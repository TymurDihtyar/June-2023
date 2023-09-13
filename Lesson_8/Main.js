// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr = [];
arr.push(new User(19345, 'Oleg', 'Kokovski', 'Kokovski@gmail.com', +380674777014));
arr.push(new User(2345, 'Taras', 'Shklanka', 'Shklanka@gmail.com', +380674777015));
arr.push(new User(3345, 'Dmutro', 'Shkill', 'Shkill@gmail.com', +380674777016));
arr.push(new User(24655, 'Misha', 'Naumenko', 'Naumenko@gmail.com', +380674777017));
arr.push(new User(5344, 'Olga', 'Dubas', 'Dubas@gmail.com', +380674777018));
arr.push(new User(3456, 'Olena', 'Sova', 'Sova@gmail.com', +380674777019));
arr.push(new User(7234, 'Nastja', 'Nuva', 'Nuva@gmail.com', +380674777020));
arr.push(new User(8879, 'Ostap', 'Dithyar', 'Dithyar@gmail.com', +380674777021));
arr.push(new User(9124, 'Katja', 'Kovaluk', 'Kovaluk@gmail.com', +380674777022));
arr.push(new User(10567, 'Jaroslava', 'Kozak', 'Kozak@gmail.com', +380674777023));
// console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let arr2 = arr.filter(item => item.id % 2 === 0);
// console.log(arr2);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let arr3 = arr.sort((a, b) => a.id - b.id)
// console.log(arr3);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, ...order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let classArray = [];
classArray.push(new Client(19345, 'Oleg', 'Kokovski', 'Kokovski@gmail.com', +380674777014, 'd1', 'd2', 'd3'));
classArray.push(new Client(2345, 'Taras', 'Shklanka', 'Shklanka@gmail.com', +380674777015, 'd1', 'd2', 'd3', 'f1'));
classArray.push(new Client(3345, 'Dmutro', 'Shkill', 'Shkill@gmail.com', +380674777016, 'd1'));
classArray.push(new Client(24655, 'Misha', 'Naumenko', 'Naumenko@gmail.com', +380674777017, 'd1', 'f1'));
classArray.push(new Client(5344, 'Olga', 'Bebra', 'Bebra@gmail.com', +380674777018, 'd1', 'd2', 'd3', 'f1', 'c3'));
classArray.push(new Client(3456, 'Olena', 'Sova', 'Sova@gmail.com', +380674777019, 'd1', 'd2', 'd3', 'f1', 'c3', 'v1'));
classArray.push(new Client(7234, 'Nastja', 'Nuva', 'Nuva@gmail.com', +380674777020, 'f1', 'c3', 'v1'));
classArray.push(new Client(8879, 'Ostap', 'Dithyar', 'Dithyar@gmail.com', +380674777021, 'd1', 'd2', 'd3', 'f1', 'c3', 'v1'));
classArray.push(new Client(9124, 'Katja', 'Kovaluk', 'Kovaluk@gmail.com', +380674777022, 'f1', 'c3'));
classArray.push(new Client(10567, 'Jaroslava', 'Kozak', 'Kozak@gmail.com', +380674777023, 'd1', 'd2', 'd3', 'f1'));
// console.log(classArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(classArray.sort((a, b) => a.order.length - b.order.length));


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, maxSpeed,  engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
// }
//
// let car1 = new Car('i3', 'bmw', 2015, 350,2.0);
// console.log(car1);
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
// }
// car1.drive();
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// Car.prototype.info = function () {
//     for (const item in this) {
//         console.log(`${item} - ${this[item]}`);
//     }
// }
// car1.info();
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed;
// }
// car1.increaseMaxSpeed(25);
// car1.drive();
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear = function (newValue) {
//     this.year = newValue;
// }
// car1.changeYear(2010)
// car1.info();
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function (driver){
//     this.driver = driver
// }
// car1.addDriver({name: "Tymur", age: 33, statusLicence: true})
// console.log(car1);


function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const argKey in this) {
            console.log(`${argKey} - ${this[argKey]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`їдемо зі новою швидкістю ${this.maxSpeed} на годину`);
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (name, age, statusLicence) {
        this.driver = {name, age, statusLicence}
    }
}

let car = new Car('i3', 'bmw', 2015, 350, 2.0)
car.drive();
car.info();
car.increaseMaxSpeed(15);
car.changeYear(2010)
car.addDriver('Tymur', 34, true)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class NewCar {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const argKey in this) {
            console.log(`${argKey} - ${this[argKey]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`їдемо зі новою швидкістю ${this.maxSpeed} на годину`);
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(name, age, statusLicence) {
        this.driver = {name, age, statusLicence}
    }
}

let carClass = new NewCar('308', 'pegot', 2018, 200, 1.6)
carClass.drive();
carClass.info();
carClass.increaseMaxSpeed(30);
carClass.changeYear(2015)
carClass.addDriver('Tymur', 34, true)
console.log(carClass);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Sinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let sinderellas = [];
sinderellas.push(new Sinderella('Sinderella_1', 20, 31));
sinderellas.push(new Sinderella('Sinderella_2', 24, 33));
sinderellas.push(new Sinderella('Sinderella_3', 28, 34));
sinderellas.push(new Sinderella('Sinderella_4', 45, 35));
sinderellas.push(new Sinderella('Sinderella_5', 51, 39));
sinderellas.push(new Sinderella('Sinderella_6', 18, 41));
sinderellas.push(new Sinderella('Sinderella_7', 17, 45));
sinderellas.push(new Sinderella('Sinderella_8', 35, 30));
sinderellas.push(new Sinderella('Sinderella_9', 42, 37));
sinderellas.push(new Sinderella('Sinderella_10', 37, 32));
console.log(sinderellas);

// function Prinse(name, age, findShose) {
//     this.name = name;
//     this.age = age;
//     this.findShose = findShose;
//     this.findSinderella = function (sinderellas) {
//         for (const sinderella of sinderellas) {
//             if (sinderella.footSize === this.findShose) {
//                 return console.log(`Заповітна принцеса: ${sinderella.name}`);
//             }
//         }
//         return console.log(`Заповітної принцеси немає`)
//     }
// }

class Prinse {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
    findSinderella (people) {
        for (const sinderella of people) {
            if (sinderella.footSize === this.findShose) {
                return console.log(`Заповітна принцеса: ${sinderella.name}`);
            }
        }
        return console.log(`Заповітної принцеси немає`)
    }
}
    let prinse = new Prinse("Stefan", 26, 35);
    prinse.findSinderella(sinderellas)



let find = sinderellas.find(sinderella => sinderella.footSize === prinse.findShose);
    find ? console.log(`Заповітна принцеса: ${find.name}`) : console.log(`Заповітної принцеси немає`)


let str = 'okten';
str.toUpperCase()
console.log(str);