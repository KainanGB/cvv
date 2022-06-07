const ul = document.querySelector(".links");
const check = document.querySelector("#check");
const nav = document.querySelector(".nav");

check.addEventListener("click", () => {
  nav.style.backgroundColor = "#171c28";
  if (ul.style.left === "0%") {
    nav.style.backgroundColor = "transparent";

    ul.style.left = "100%";
  } else ul.style.left = "0%";
});

ul.addEventListener("click", (e) => {
  nav.style.backgroundColor = "transparent";
  if ((e.target.className = "link")) ul.style.left = "100%";
});
