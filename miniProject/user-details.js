// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const url = 'https://jsonplaceholder.typicode.com/users/';
const id = new URL(location.href).searchParams.get('id');

//Створюємо запит на конкретного юзера
async function getUser() {
    let result = await fetch(url + id);
    return result.json();
}

//Створюємо фунцію рендеру даних юзера
async function renderUser() {
    let user = await getUser();
    let userDetails = document.querySelector('.userDetails');
    createUser(user, userDetails)
}

//Створюємо фунцію вивиоду даних юзера за допомогою рекурсії
function createUser(obj, tag) {
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            let keyDiv = document.createElement('div');
            keyDiv.innerHTML = `${key.toUpperCase().fontcolor('#724c15')}: ${obj[key]}`
            tag.append(keyDiv);
        } else {
            let div = document.createElement('div');
            div.classList.add('sub');
            div.innerHTML = key.toUpperCase().fontcolor('#724c15');
            createUser(obj[key], div);
            tag.append(div);
        }

    }
}

renderUser();

//Створюємо запит пости юзера
async function getPosts() {
    let result = await fetch(url + id + '/posts');
    return result.json();
}

//Створюємо фунцію рендеру даних постів
async function renderPosts() {
    let posts = await getPosts();
    let postsBut = document.querySelector('.posts')
    let click = false;

    postsBut.addEventListener('click', () => {
        let renderPosts = document.querySelector('.renderPosts');
        if (!click) {
            renderPosts.innerHTML = '';
            posts.forEach(post => {
                let divPost = document.createElement('div');
                let title = document.createElement('h6');
                let postBut = document.createElement('button');
                divPost.classList.add('show-post');

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
        } else {
            let divPosts = document.querySelectorAll('.divPost');
            divPosts.forEach((divPost) => {
                divPost.classList.remove('show-post');
            });
        }
        click = !click;
    })

}

renderPosts();

let butPrev = document.querySelector('.prev');
butPrev.addEventListener('click', () => {
    window.location.href = 'index.html';
})