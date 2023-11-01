import faker from 'faker';

const mount = (el) => {
   
let products = '';

for(let i=0;i<3;i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

el.innerHTML = products;
}


// for running this repo in isolation

if(process.env.NODE_ENV==='development'){
    const el = document.querySelector('#dev-prod');
    if(el){
        mount(el);
    }
}

export {mount};