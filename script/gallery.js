"use strict";

class ImageGallery {
  constructor() {
    this.loginBtn = document.querySelector(".logo");
    this.loginModal = document.querySelector(".loginModal");
    this.overlay = document.querySelector(".overlay");
    this.buttons = document.querySelector(".btns");
    this.login = false;
    this.init();
  }

  init() {
    this.addEventListeners();
    this.loadImagesFromLocalStorage();
  }

  addModalOverlay() {
    this.loginModal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
  }

  removeModalOverlay() {
    this.loginModal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }

  handleLogin() {
    const submitBtn = document.querySelector("#submit");
    const handleBtns = document.querySelector("#handleBtns");

    submitBtn.addEventListener("click", () => {
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;

      const isCorrectCredentials =
        username === "kunalchavan@gmail.com" &&
        password === "DaktdbwtztyrAt3bdswtybkd";

      if (!isCorrectCredentials) {
        handleBtns.classList.add("hidden");
        alert("Wrong username or password");
      } else {
        this.login = true;
        handleBtns.classList.remove("hidden");
        this.removeModalOverlay();
      }
    });

    const logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {
      this.login = false;
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
      handleBtns.classList.add("hidden");
      this.removeModalOverlay();
    });
  }

  addImageFromFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageContainer = document.getElementById("image-container");
      const img = document.createElement("img");
      img.src = event.target.result;
      imageContainer.appendChild(img);
      this.saveImagesToLocalStorage();
    };
    reader.readAsDataURL(file);
  }

  saveImagesToLocalStorage() {
    const imageContainer = document.getElementById("image-container");
    const images = imageContainer.querySelectorAll("img");
    const imageSources = Array.from(images).map((img) => img.src);
    localStorage.setItem("images", JSON.stringify(imageSources));
  }

  loadImagesFromLocalStorage() {
    const imageContainer = document.getElementById("image-container");
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];
    savedImages.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      imageContainer.appendChild(img);
    });
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    for (const file of files) {
      this.addImageFromFile(file);
    }
  }

  handleFileInput(event) {
    const files = event.target.files;
    for (const file of files) {
      this.addImageFromFile(file);
    }
  }

  removeImage() {
    const imageContainer = document.getElementById("image-container");
    const images = imageContainer.querySelectorAll("img");
    if (images.length > 0) {
      imageContainer.removeChild(images[images.length - 1]);
      this.saveImagesToLocalStorage();
    } else {
      alert("No images to remove!");
    }
  }

  reset() {
    localStorage.removeItem("images");
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = "";
  }

  addEventListeners() {
    this.loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.addModalOverlay();

      const closeModal = () => {
        this.removeModalOverlay();
        document.removeEventListener("keydown", handleEscape);
      };

      const handleEscape = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      document.addEventListener("keydown", handleEscape);
      this.overlay.addEventListener("click", closeModal);
      this.handleLogin();
    });

    document.getElementById("add-image-btn").addEventListener("click", () => {
      document.getElementById("file-input").click();
    });

    document.getElementById("remove-image-btn").addEventListener("click", () => {
      this.removeImage();
    });

    document.getElementById("reset-btn").addEventListener("click", () => {
      this.reset();
    });

    document.getElementById("file-input").addEventListener("change", (event) => {
      this.handleFileInput(event);
    });
  }
}

const gallery = new ImageGallery();
