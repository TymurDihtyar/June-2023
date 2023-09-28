// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = 'https://jsonplaceholder.typicode.com/posts/';
const postId = new URL(location.href).searchParams.get('postId');

//Створюємо запит на конкретний пост юзера
async function getPost() {
    let result = await fetch(url + postId);
    return result.json();
}

//Створюємо запит на коментарі до поста юзера
async function getComments() {
    let result = await fetch(url + postId + '/comments');
    return result.json();
}

//Створюємо функцію для створення блоку поста чи коментара юзера
function createBlock(mass, tag) {
    for (const key in mass) {
        let keyDiv = document.createElement('div');
        keyDiv.innerHTML = `${key.toUpperCase().fontcolor('#724c15')}: ${mass[key]}`
        tag.append(keyDiv);
    }
}

//Створюємо функцію рендер конкретниого поста юзера
async function renderPost() {
    let post = await getPost();
    let renderPost = document.querySelector('.renderPost');
    createBlock(post, renderPost);
}

//Створюємо функцію рендер коментарів поста юзера
async function renderComments() {
    let comments = await getComments();
    let renderComments = document.querySelector('.renderComments');
    for (const comment of comments) {
        let comDiv = document.createElement('div');
        comDiv.classList.add('comDiv');
        createBlock(comment, comDiv);
        renderComments.append(comDiv)
    }

}

renderPost();
renderComments()

const userId = new URL(location.href).searchParams.get('userId');
let butPrev = document.querySelector('.prev');
butPrev.addEventListener('click', () => {
    window.location.href = `user-details.html?id=${userId}`;
})
