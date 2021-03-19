const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".site_navigation");
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open_burger")
  body.classList.toggle("lock")
});
