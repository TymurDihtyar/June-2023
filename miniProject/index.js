// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
const url = 'https://jsonplaceholder.typicode.com/users';
const render = document.querySelector('.render');

// Створюємо функцію запиту даних юзерів
async function getUsers() {
    try {
        const result = await fetch(url);
        return result.json();
    } catch (error) {
        render.innerHTML = 'Lost connection with server';
        console.log(error);
    }
}

// Створюємо функцію рендеру юзерів
async function renderUsers() {
    const users = await getUsers();
    users.forEach(user => {
        let userBlock = document.createElement('div');
        let userData = document.createElement('div');
        let but = document.createElement('button');

        userBlock.classList.add('userBlock');
        userData.classList.add('userData');
        but.classList.add(`userBut`);

        userData.innerHTML = `#${user.id} - ${user.name.toUpperCase()}`;
        but.innerHTML = 'Details';

        but.addEventListener("click", () => {
            location.href = `user-details.html?id=${user.id}`;
        })

        userBlock.append(userData, but);
        render.appendChild(userBlock);
    })
}

// викликаємо функцію редер
renderUsers();