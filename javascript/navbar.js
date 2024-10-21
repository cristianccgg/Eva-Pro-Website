const hambBtn = document.getElementById("hamb-btn");
const navbarItems = document.getElementById("navbar-items");

hambBtn.addEventListener("click", () => {
  navbarItems.classList.toggle("hidden");
});
