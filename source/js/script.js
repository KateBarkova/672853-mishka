var link = document.querySelector(".product-week__btn");
var iconCart = document.querySelectorAll(".product__cart");
var cart = document.querySelector(".cart");
var overlay = document.querySelector(".overlay");
var cartAdd = document.querySelector(".cart__add");
var cancelScroll = document.querySelector("body");

if (cartAdd) {
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

  if (link) {
    link.addEventListener("click", cartShow);
  }

  for (var i = 0; i < iconCart.length; i++) {
    iconCart[i].addEventListener("click", cartShow);
  }

  overlay.addEventListener("click", overlayCloseHandler);

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cart.classList.contains("cart-show")) {
        overlayCloseHandler(evt);
      }
    }
  });
}

var menuToggle = document.querySelector(".main-nav__toggle");
var userMenu = document.querySelector(".main-nav__user");
var mainMenu = document.querySelector(".main-nav__main");
var btnMenu = document.querySelector(".main-nav__toggle");

mainMenu.classList.remove('main-nav--show');
userMenu.classList.remove('main-nav--show');
menuToggle.classList.remove('main-nav--no-js');

function toggleMenu(evt) {
  evt.preventDefault();
  userMenu.classList.toggle("main-nav--show");
  mainMenu.classList.toggle("main-nav--show");
  btnMenu.classList.toggle("main-nav__toggle--open");
}

menuToggle.addEventListener ("click", toggleMenu);

function initMap() {
  var uluru = {lat: 59.938771377472285, lng: 30.32327415000009};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16.8,
    center: uluru,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: mark = {lat: 59.938771377472285, lng: 30.32327415000009},
    map: map,
    icon: {
    url: "img/icon-map-pin.svg",
    scaledSize: new google.maps.Size(67, 100)
    }
  });
  var styles = [
    { "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [ { "gamma": "0.3" } ]
      },
    { "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [ { "color": "#2e1403" } ]
      },
    { "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [ { "hue": "#2e1403"} ]
      }];
  map.setOptions({styles: styles});
}
