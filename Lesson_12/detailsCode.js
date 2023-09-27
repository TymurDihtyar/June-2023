let url = new URL(location.href);
let data = JSON.parse(url.searchParams.get('data'));

function fillElement(className, text) {
    const element = document.querySelector(className);
    element.innerHTML += text;
}

async function getUser() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/' + data);
    return result.json();
}

async function renderUser() {
    const user = await getUser();
    fillElement('.id', user.id);
    fillElement('.name', user.name);
    fillElement('.username', user.username);
    fillElement('.email', user.email);
    fillElement('.street', user.address.street);
    fillElement('.suite', user.address.suite);
    fillElement('.city', user.address.city);
    fillElement('.zipcode', user.address.zipcode);
    fillElement('.lat', user.address.geo.lat);
    fillElement('.lng', user.address.geo.lng);
    fillElement('.phone', user.phone);
    fillElement('.website', user.website);
    fillElement('.company_name', user.company.name);
    fillElement('.catchPhrase', user.company.catchPhrase);
    fillElement('.bs', user.company.bs);
}

renderUser();




























