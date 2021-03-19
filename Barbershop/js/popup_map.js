var mapLink = document.querySelector(".contacts_button_map");
var mapLink_1 = document.querySelector(".contacts_link_map");
var mapPopup = document.querySelector(".modal_map");
var mapClose = mapPopup.querySelector(".modal_close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal_show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal_show")) {
      mapPopup.classList.remove("modal_show");
    }
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

mapLink_1.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal_show");
});
