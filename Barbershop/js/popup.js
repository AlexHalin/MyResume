var link = document.querySelector(".login_link");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal_close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal_show");
  popup.classList.remove("modal_error");
});


form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.add("modal_error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal_show")) {
      popup.classList.remove("modal_show");
      popup.classList.remove("modal_error")
    }
  }
});

