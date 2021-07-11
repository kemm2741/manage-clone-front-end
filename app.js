const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");

const hamburgerNavlist = document.querySelector(".hamburger-navlist");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburgerNavlist.classList.toggle("active");
  overlay.classList.toggle("overlay-active");
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("overlay-active");
  hamburgerNavlist.classList.remove("active");
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});
