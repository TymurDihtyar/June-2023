let id = new URL(location.href).searchParams.get('id');
let url = 'https://rickandmortyapi.com/api/character/'
let allUl = document.querySelector('.all')

fetch(url + id)
    .then(data => data.json())
    .then(person => {
        createPerson(person, allUl)
    })

function createPerson(obj, tag) {
    for (const key in obj) {
        if (typeof obj[key] !== 'object') {
            let li = document.createElement('li');
            li.innerHTML = `${key} - ${obj[key]}`
            tag.appendChild(li);
        }else {
            let ulUnder = document.createElement('ul');
            createPerson(obj[key], ulUnder)
            tag.appendChild(ulUnder);
        }
    }
}