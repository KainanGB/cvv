const ul = document.querySelector(".links");
const check = document.querySelector("#check");

check.addEventListener("click", () => {
  if (ul.style.left === "0%") {
    ul.style.left = "100%";
  } else ul.style.left = "0%";
});

ul.addEventListener("click", (e) => {
  if ((e.target.className = "link")) ul.style.left = "100%";
});
