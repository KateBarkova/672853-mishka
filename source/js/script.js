var link = document.querySelector(".product-week__btn");
var iconCart = document.querySelectorAll(".product__cart");
var cart = document.querySelector(".cart");
var overlay = document.querySelector(".overlay");
var cartAdd = document.querySelector(".cart__add");
var cancelScroll = document.querySelector("body");

function overlayCloseHandler(evt) {
  evt.preventDefault();
  cart.classList.remove("cart-show");
  overlay.classList.remove("overlay-show");
  cancelScroll.style.overflow = "visible";
};

function cartShow(evt) {
  evt.preventDefault();
  cart.classList.add("cart-show");
  overlay.classList.add("overlay-show");
  cancelScroll.style.overflow = "hidden";
};

if (overlay) {
  overlay.addEventListener("click", overlayCloseHandler);
};

if (link) {
  link.addEventListener("click", cartShow);
};

if (iconCart) {
  for (var i = 0; i < iconCart.length; i++) {
    iconCart[i].addEventListener("click", cartShow);
  }
};

if (cartAdd) {
  cartAdd.addEventListener("click", overlayCloseHandler);

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cart.classList.contains("cart-show")) {
        cart.classList.remove("cart-show");
        overlay.classList.remove("overlay-show");
        cancelScroll.style.overflow = "visible";
      }
    }
  });
}

var menuToggle = document.querySelector(".main-nav__toggle");
var userMenu = document.querySelector(".main-nav__user");
var mainMenu = document.querySelector(".main-nav__main");
var btnMenu = document.querySelector(".main-nav__toggle");

function toggleMenu(evt) {
  evt.preventDefault();
  userMenu.classList.toggle("main-nav--show");
  mainMenu.classList.toggle("main-nav--show");
  btnMenu.classList.toggle("main-nav__toggle--open");
}

menuToggle.addEventListener ("click", toggleMenu);
