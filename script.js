
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navigationItems = navLinks.querySelectorAll("a");

function closeMenu() {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open navigation menu");
}

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navigationItems.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    closeMenu();
  }
});
