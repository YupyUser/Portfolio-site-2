import obj from './translate.js';

let currLng = 'en';

let lngQueue = {
    ru:'en',
    en:'ru'
};

let btn = document.querySelector('.btn');
btn.addEventListener('click', changeLanguage);

function changeLanguage () {
    for (let key in obj) {
      document.querySelector(`.${key}-lng`).textContent = obj[key][currLng];
    }
    currLng = lngQueue[currLng];
    btn.textContent = 'Change language to ' + currLng.toUpperCase();
};
changeLanguage();   