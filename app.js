const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("mobile-menu__active");
});
