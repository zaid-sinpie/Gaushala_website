"use strict";

class Website {
  constructor() {
    //buttons
    this.home = document.querySelector(".home-tag");
    this.homeDropdown = document.querySelector(".home-tag-dropdown");
    this.community = document.querySelector(".community-tag");
    this.communityDropdown = document.querySelector(".community-tag-dropdown");
    this.about = document.querySelector('.about-tag');
    this.aboutDropdown = document.querySelector('.about-tag-dropdown');
    this.copyEmail = document.querySelector('.copy');
    this.donate = document.querySelector(".donate");

    //sections
    this.homeRedirect = document.querySelector(".section-1");
    this.communityRedirect = document.querySelector(".section-2");
    this.aboutRedirect = document.querySelector('.about');

    //images animation slideshow
    this.myIndex = 0;

    //bind event listeners
    this.bindEvents();
  }

  bindEvents() {
    //home redirect buttons
    this.home.addEventListener("click", (e) => {
      e.preventDefault();
      this.homeRedirect.scrollIntoView({
        behavior: "smooth",
      });
    });

    this.homeDropdown.addEventListener("click", (e) => {
      e.preventDefault();
      this.homeRedirect.scrollIntoView({
        behavior: "smooth",
      });
    });

    //community redirect button
    this.community.addEventListener("click", (e) => {
      e.preventDefault();
      this.communityRedirect.scrollIntoView({
        behavior: "smooth",
      });
    });

    this.communityDropdown.addEventListener("click", (e) => {
      e.preventDefault();
      this.communityRedirect.scrollIntoView({
        behavior: "smooth",
      });
    });

    //about redirect button
    this.about.addEventListener("click", (e) => {
      e.preventDefault();
      this.aboutRedirect.scrollIntoView({
        behavior: "smooth",
      });
    });

    this.aboutDropdown.addEventListener("click", (e) => {
      e.preventDefault();
      this.aboutRedirect.scrollIntoView({
        behavior: "smooth",
      });
    });

    //images animation slideshow
    this.carousel();

    //donate button click page redirect
    this.donate.addEventListener("click", () => {
      window.open("./pages/donate.html", '_blank');
    });

    //onclick email copy to clipboard
    this.copyEmail.addEventListener('click', () => {
      const textToCopy = 'kunalchavan@gmail.com';

      navigator.clipboard.writeText(textToCopy)
        .catch(err => alert('Could not copy text: ', err));
    });

    //scroll animation
    document.onscroll = () => {
      let elScroll = document.querySelectorAll(".scroll");
      elScroll.forEach((el) => {
        let positionEl = el.getBoundingClientRect();
        let triggerEl = positionEl.top;

        if (triggerEl < 600) {
          el.classList.add("scroll--show");
        }
      });
    };
  }

  carousel() {
    let x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    this.myIndex++;
    if (this.myIndex > x.length) {
      this.myIndex = 1;
    }
    x[this.myIndex - 1].style.display = "block";
    //changing images every 10sec's
    setTimeout(() => this.carousel(), 10000);
  }
}

// Instantiate the class
const Gaushala = new Website();