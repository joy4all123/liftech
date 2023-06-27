const toggleMenu = document.getElementById("toggleMenu");
const toggleIcon = document.getElementById("toggleIcon");

toggleMenu.addEventListener("change", function () {
  if (toggleMenu.checked) {
    toggleIcon.classList.remove("ri-menu-line");
    toggleIcon.classList.add("ri-close-circle-fill");
  } else {
    toggleIcon.classList.remove("ri-close-circle-fill");
    toggleIcon.classList.add("ri-menu-line");
  }
});
