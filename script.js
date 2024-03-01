'use strict';

const home = document.querySelector('.home-tag');
const homeDropdown = document.querySelector('.home-tag-dropdown');
const homeRedirect = document.querySelector('.section-1');
const donate = document.querySelector('.donate');


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

//images animation slideshow
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 2 seconds
}

//donate button click page redirect
donate.addEventListener('click',function(){
  location.href = './pages/donate.html';
});