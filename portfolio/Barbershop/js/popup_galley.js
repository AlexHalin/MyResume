var galleryLink = document.querySelector(".photos");
var galleryPopup = document.querySelector(".modal_gallery");
var galleryClose = galleryPopup.querySelector(".modal_close");

galleryLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryPopup.classList.add("modal_show");
});

galleryClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryPopup.classList.remove("modal_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (galleryPopup.classList.contains("modal_show")) {
      galleryPopup.classList.remove("modal_show");
    }
  }
});
