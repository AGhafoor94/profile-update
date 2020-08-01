const home = document.getElementById("home");
const portfolio = document.getElementById("portfolio");
const burger = document.getElementById("burger");
const navBar = document.getElementById("navbarMenuHeroA");

if (window.location.pathname === "/portfolio") {
  home.classList.remove("is-active");
  portfolio.classList.add("is-active");
} else {
  home.classList.add("is-active");
  portfolio.classList.remove("is-active");
}
const toggleMenu = () => {
  if (burger.classList.contains("is-active")) {
    burger.classList.remove("is-active");
    navBar.classList.remove("is-active");
  } else {
    burger.classList.add("is-active");
    navBar.classList.add("is-active");
  }
};
