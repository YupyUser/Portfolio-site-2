import adtnlBlocks from './adtnlBlocks.js';
import obj from './translateObj.js';

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
    adtnlBlocks.forEach((item)=> document.querySelectorAll('.' + item + '-russian').forEach((item)=> item.classList.toggle('hidden')));
    currLng = lngQueue[currLng];
    
    btn.textContent = currLng.toUpperCase();
};
changeLanguage();