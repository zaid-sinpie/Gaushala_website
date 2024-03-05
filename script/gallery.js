"use strict";

//selecting elements
const container = document.getElementsByClassName("content-wrapper")[0];

//data
let listOfImages = [0, 1, 2, 3];


//function to add html code inside section
const addImages = function () {
  let html = `<div class="hover14 column">
  <div>
    <figure><img src="../assests/gallery/img-0.jpg" class="gallery-images"/></figure>
  </div>
</div>`;
  listOfImages.forEach((i) => {
    html = `<div class="hover14 column">
    <div>
      <figure><img src="../assests/gallery/img-${i}.jpg" class="gallery-images"/><p>img-${i}</p></figure>
    </div>
</div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
};

//function execution
addImages();