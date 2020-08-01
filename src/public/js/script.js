const home = document.getElementById("home");
const portfolio = document.getElementById("portfolio");
if (window.location.pathname === "/portfolio") {
  home.classList.remove("is-active");
  portfolio.classList.add("is-active");
} else {
  home.classList.add("is-active");
  portfolio.classList.remove("is-active");
}
