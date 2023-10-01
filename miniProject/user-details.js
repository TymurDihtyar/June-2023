// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const url = 'https://jsonplaceholder.typicode.com/users/';
const id = new URL(location.href).searchParams.get('id');
let userDetails = document.querySelector('.userDetails');
let renderPosts = document.querySelector('.renderPosts');

//Створюємо запит на конкретного юзера
async function getUser() {
    try {
        let result = await fetch(url + id);
        return result.json();
    } catch (error) {
        userDetails.innerHTML = 'Lost connection with server';
        console.log(error);
    }
}

//Створюємо запит пости юзера
async function getPosts() {
    try {
        let result = await fetch(url + id + '/posts');
        return result.json();
    } catch (error) {
        renderPosts.innerHTML = 'Lost connection with server';
        console.log(error);
        renderPosts.classList.add('show-post');
        // let postsBut = document.querySelector('.posts')
        // let click = false;
        // postsBut.addEventListener('click', () => {
        //     (!click) ? renderPosts.classList.add('show-post') : renderPosts.classList.remove('show-post');
        //     click = !click;
        // })
    }
}

//Створюємо фунцію рендеру даних юзера
async function renderUser() {
    let user = await getUser();
    createUser(user, userDetails)
}

//Створюємо фунцію вивиоду даних юзера за допомогою рекурсії
function createUser(obj, tag) {
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            let keyDiv = document.createElement('div');
            keyDiv.innerHTML = `${key.toUpperCase().fontcolor('#383638')}: ${obj[key]}`
            tag.append(keyDiv);
        } else {
            let div = document.createElement('div');
            div.classList.add('sub');
            div.innerHTML = key.toUpperCase().fontcolor('#383638');
            createUser(obj[key], div);
            tag.append(div);
        }
    }
}

//Створюємо фунцію рендеру даних постів
async function renderAllPosts() {
    let posts = await getPosts();
    let postsBut = document.querySelector('.posts')
    let click = false;

    //Створюємо пости але не показуємо їх
    posts.forEach(post => {
        let divPost = document.createElement('div');
        let title = document.createElement('h6');
        let postBut = document.createElement('button');

        title.innerHTML = post.title;
        postBut.innerHTML = `Details`;
        postBut.classList.add('userBut');
        divPost.classList.add('divPost');

        divPost.append(title, postBut);
        renderPosts.appendChild(divPost);

        postBut.addEventListener("click", () => {
            location.href = `post-details.html?postId=${post.id}&userId=${id}`;
        })
    })

    //При натисканні на кнопку плавно вививодимо або приховуємо пости на сторінці
    postsBut.addEventListener('click', () => {
        (!click) ? renderPosts.classList.add('show-post') : renderPosts.classList.remove('show-post');
        click = !click;
    })
}

//Виклик асинхронних функцій
renderUser();
renderAllPosts();

//Додаємо кнопку повернення на попередню сторінку
let butPrev = document.querySelector('.prev');
butPrev.addEventListener('click', () => {
    window.location.href = 'index.html';
})