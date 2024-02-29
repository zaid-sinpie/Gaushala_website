'use strict';

const home = document.querySelector('.home-tag');
const homeRedirect = document.querySelector('.section-1');

home.addEventListener('click',function(e){
    e.preventDefault();
    homeRedirect.scrollIntoView({
        behavior:'smooth'
    });
});