function fillElement(className, text) {
    const element = document.querySelector(className);
    element.innerHTML += text;
}

let url = new URL(location.href);
let data = JSON.parse(url.searchParams.get('data'));
console.log(data);

fillElement('.id', data.id);
fillElement('.name', data.name);
fillElement('.username', data.username);
fillElement('.email', data.email);
fillElement('.street', data.address.street);
fillElement('.suite', data.address.suite);
fillElement('.city', data.address.city);
fillElement('.zipcode', data.address.zipcode);
fillElement('.lat', data.address.geo.lat);
fillElement('.lng', data.address.geo.lng);
fillElement('.phone', data.phone);
fillElement('.website', data.website);
fillElement('.company_name', data.company.name);
fillElement('.catchPhrase', data.company.catchPhrase);
fillElement('.bs', data.company.bs);