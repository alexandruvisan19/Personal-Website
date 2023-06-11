document.querySelector("#hamburger").addEventListener("click", () => {
  document.querySelector("#nav-links").classList.remove("hidden");
});

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("#nav-links").classList.add("hidden");
});
