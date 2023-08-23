const menu = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-icons");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar-open");
  menuButton.classList.toggle("open");
});
