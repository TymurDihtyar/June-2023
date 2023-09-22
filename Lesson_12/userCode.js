// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

async function getUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    return result.json();
}

async function renderList() {
    const users = await getUsers();
    const ul = document.querySelector('.listOfUsers');
    users.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('userLi');
        const a = document.createElement('a');
        a.innerHTML = `${user.id}. ${user.name} <hr>`;
        a.href = 'details.html?data=' + JSON.stringify(user.id);
        li.appendChild(a);
        ul.appendChild(li);
    })
}

renderList()