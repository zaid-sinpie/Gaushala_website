'use strict';

const home = document.querySelector('.home-tag');
const homeDropdown = document.querySelector('.home-tag-dropdown');
const homeRedirect = document.querySelector('.section-1');


//home redirect buttons
home.addEventListener('click',function(e){
    e.preventDefault();
    homeRedirect.scrollIntoView({
        behavior:'smooth'
    });
});
homeDropdown.addEventListener('click',function(e){
    e.preventDefault();
    homeRedirect.scrollIntoView({
        behavior:'smooth'
    });
});