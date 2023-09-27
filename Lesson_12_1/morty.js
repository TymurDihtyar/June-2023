let url = 'https://rickandmortyapi.com/api/character/'
let characters = document.querySelector('.characters');
fetch(url)
    .then(data => data.json())
    .then(({results}) => {
    console.log(results);

        for (const character of results) {
            let div = document.createElement('div');
            div.innerHTML = `${character.name}`;
            let but = document.createElement('button');
            let img = document.createElement('img')
            img.src = character.image;
            but.innerText = 'details';
            but.onclick = () => {
                location.href = `person.html?id=${character.id}`
            }
            div.append(img, but);
            characters.appendChild(div);
        }
})