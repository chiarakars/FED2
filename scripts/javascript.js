// Hamburger menu
const openMenu = document.querySelector("nav:nth-of-type(1) ul li:first-child");
const sideMenu = document.querySelector("nav:nth-of-type(2)");
const closeMenu = document.querySelector("  nav:nth-of-type(2) ul li:first-child");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("active");
  sideMenu.classList.toggle("active");
});
  closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    sideMenu.classList.toggle("active");
});

// Shortcuts (hulp van Lucas)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    window.location.href = "about.html";
  }
});

//   light dark mode van vorig jaar (student assistent)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("theme-form");
  form.addEventListener("change", (e) => {
    document.body.dataset.theme = e.target.value;
  });
});

// Scroll animatie met button
const scrollButton = document.querySelector("footer > section:nth-of-type(6)");
if (scrollButton) {
  scrollButton.onclick = function () {
    const topElement = document.querySelector("nav");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'top' not found.");
    }
  };
}
