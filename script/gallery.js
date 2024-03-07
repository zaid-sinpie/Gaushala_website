"use strict";

//selecting elements
// const container = document.getElementsByClassName("content-wrapper")[0];
// //data
// let listOfImages = [0, 1, 2, 3];

// // function to add html code inside section
// const addImages = function () {
//   let html = `<div class="hover14 column">
//   <div>
//     <figure><img src="../assests/gallery/img-0.jpg" class="gallery-images"/></figure>
//   </div>
// </div>`;
//   listOfImages.forEach((i) => {
//     html = `<div class="hover14.column">
//     <div>
//       <figure><img src="../assests/gallery/img-${i}.jpg" class="gallery-images"/><p>img-${i}</p></figure>
//     </div>
// </div>`;
//     container.insertAdjacentHTML("beforeend", html);
//   });
// };
// // function execution
// addImages();
const loginBtn = document.querySelector('.logo');
const loginModal = document.querySelector('.loginModal');
const overlay = document.querySelector('.overlay');

let login = false;

//add modal overlay


loginBtn.addEventListener('click',function(){  
  const username = document.querySelector('#username').value = '';
  const password = document.querySelector('#password').value = '';
  const submitBtn = document.querySelector('#password');
  const handleBtns = document.querySelector('#handleBtns');

  submitBtn.addEventListener('click',function(){
    if (username === 'kunalchavan@gmail.com' && password === 'DaktdbwtztyrAt3bdswtybkd'){
      handleBtns.classList.remove('hidden')
    }
    else{
      handleBtns.classList.add('hidden');
    }
  })
})


// Function to add an image via file input
function addImageFromFile(file) {
  let reader = new FileReader();
  reader.onload = function (event) {
    let imageContainer = document.getElementById("image-container");
    let img = document.createElement("img");
    img.src = event.target.result;
    imageContainer.appendChild(img);
    saveImagesToLocalStorage();
  };
  reader.readAsDataURL(file);
}

// Function to save images to local storage
function saveImagesToLocalStorage() {
  let imageContainer = document.getElementById("image-container");
  let images = imageContainer.getElementsByTagName("img");
  let imageSources = [];
  for (let i = 0; i < images.length; i++) {
    imageSources.push(images[i].src);
  }
  localStorage.setItem("images", JSON.stringify(imageSources));
}

// Function to load images from local storage
function loadImagesFromLocalStorage() {
  let imageContainer = document.getElementById("image-container");
  let savedImages = JSON.parse(localStorage.getItem("images"));
  if (savedImages) {
    for (let i = 0; i < savedImages.length; i++) {
      let img = document.createElement("img");
      img.src = savedImages[i];
      imageContainer.appendChild(img);
    }
  }
}

// Function to allow drop
function allowDrop(event) {
  event.preventDefault();
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();
  let files = event.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    addImageFromFile(files[i]);
  }
}

// Function to handle file input change event
function handleFileInput(event) {
  let files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    addImageFromFile(files[i]);
  }
}

// Function to remove the last added image
function removeImage() {
  let imageContainer = document.getElementById("image-container");
  let images = imageContainer.getElementsByTagName("img");
  if (images.length > 0) {
    imageContainer.removeChild(images[images.length - 1]);
    saveImagesToLocalStorage(); // Save images to local storage after removal
  } else {
    alert("No images to remove!");
  }
}

// Function to reset and clear all images
function reset() {
  localStorage.removeItem("images");
  let imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = ""; // Clear all images from the container
}

// Add event listeners
document.getElementById("add-image-btn").addEventListener("click", function () {
  document.getElementById("file-input").click();
});
document
  .getElementById("remove-image-btn")
  .addEventListener("click", removeImage);
document.getElementById("reset-btn").addEventListener("click", reset);
document
  .getElementById("file-input")
  .addEventListener("change", handleFileInput);

// Load images from local storage when the page loads
window.addEventListener("load", loadImagesFromLocalStorage);