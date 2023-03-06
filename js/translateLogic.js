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


    document.querySelector('.futures').classList.toggle('special_container');
    document.querySelector('.futures__li_p_1-lng').classList.toggle('column_width-russian','futures__li_p_1-lng');
    document.querySelector('.futures__li_p_2-lng').classList.toggle('column_width-russian','futures__li_p_2-lng');
    document.querySelectorAll('.futures__li_column_2').forEach((item)=>item.classList.toggle('column_width-russian','futures__li_column_2',''));

    adtnlBlocks.forEach((item)=> document.querySelectorAll('.' + item + '-russian').forEach((item)=> item.classList.toggle('hidden')));
    
    
    currLng = lngQueue[currLng];
    
    btn.textContent = currLng.toUpperCase();
};
changeLanguage();