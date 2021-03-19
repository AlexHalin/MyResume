var btn_popup_back = document.querySelector("#gallery_popup .popup_buttons .popup_gallery_button_back");
var btn_popup_next = document.querySelector("#gallery_popup .popup_buttons .popup_gallery_button_next");
var images_popup = document.querySelectorAll("#gallery_popup .popup_photos img");
var i = 0;

btn_popup_back .onclick = function () {
  images_popup[i].className = '';
  i--;
  if(i < 0 ) {
    i = images_popup.length - 1;
  }
  images_popup[i].className = 'showed'
};

btn_popup_next .onclick = function () {
  images_popup[i].className = '';
  i++;
  if(i >= images_popup.length) {
    i = 0;
  }
  images_popup[i].className = 'showed'
};
