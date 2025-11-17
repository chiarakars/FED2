// Hamburger menu
const openMenu = document.querySelector("nav:nth-of-type(1) ul li:first-child");
const sideMenu = document.querySelector("nav:nth-of-type(2)");
const closeMenu = document.querySelector("nav:nth-of-type(2) ul li:first-child");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("active");
  sideMenu.classList.toggle("active");
});
  closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    sideMenu.classList.toggle("active");
});


// Light dark mode (hulp van Lara)
const darkButton = document.querySelector("main > section:first-of-type button:first-of-type");
const body = document.body;
const darkImg = darkButton.querySelector("img");

darkButton.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");

if (currentTheme === "dark") {
  body.setAttribute("data-theme", "light");
    darkImg.src = "images/lightmode.png";
} else {
  body.setAttribute("data-theme", "dark");
    darkImg.src = "images/darkmode.png";
}
});

// Play button homepage background video
const button = document.querySelector("main > section:first-of-type button:last-of-type");
const video = document.querySelector("main > section:first-of-type video");
const img = button.querySelector("img");

button.addEventListener("click", () => {
if (video.paused == true) {
  video.play();
  img.src = "images/play_white.png";
} else {
  video.pause();
   img.src = "images/pause_white.png";
}
});

// Carrousel pagina 2 Turbo S 911
const carousel = document.querySelector("main > section:nth-of-type(2) ul");
const leftArrow = document.querySelector("main > section:nth-of-type(2) ul img:first-of-type");
const rightArrow = document.querySelector("main > section:nth-of-type(2) ul img:last-of-type");

leftArrow.addEventListener("click", () => {
carousel.scrollLeft = 0;
});

rightArrow.addEventListener("click", () => {
carousel.scrollLeft= carousel.scrollWidth;
});





























// ********************************************
// CODES VAN VORIG JAAR NIET MEER GEBRUIKEN
// ********************************************

//   light dark mode van vorig jaar (student assistent)
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("theme-form");
//   form.addEventListener("change", (e) => {
//     document.body.dataset.theme = e.target.value;
//   });
// });

// Shortcuts (hulp van Lucas)
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
//   }
// });
// document.addEventListener("keydown", function (event) {
//   if (event.key === "a" || event.key === "A") {
//     window.location.href = "about.html";
//   }
// });

// Scroll animatie met button
// const scrollButton = document.querySelector("footer > section:nth-of-type(6)");
// if (scrollButton) {
//   scrollButton.onclick = function () {
//     const topElement = document.querySelector("nav");
//     if (topElement) {
//       topElement.scrollIntoView({ behavior: "smooth" });
//     } else {
//       console.error("Element with ID 'top' not found.");
//     }
//   };
// }