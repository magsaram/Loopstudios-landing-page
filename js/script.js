const burger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menu = document.querySelector(".navmobile");

burger.addEventListener("click", function () {
  menu.classList.toggle("shownav");
});

close.addEventListener("click", function () {
  menu.classList.toggle("shownav");
});
