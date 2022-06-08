const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

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

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
