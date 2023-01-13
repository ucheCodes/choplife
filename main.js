let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle('active');

    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
    shoppingcart.classList.toggle('active');

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar  = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar .classList.toggle('active');

    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* Swipers block of carousel codes */
var swiper = new Swiper(".product-slider", {
    loop : true,
    spaceBetween: 20,
    autoplay : {
        delay : 5000,
        disableOnInteraction : false
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop : true,
    spaceBetween: 20,
    autoplay : {
        delay : 5000,
        disableOnInteraction : false
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });
