let activeindex = 0;
const slides = document.querySelectorAll(".event-slider-card");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const findindex = () => {
  if (slides[0].classList.contains("swiper-slide-active")) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
  if (slides[slides.length - 1].classList.contains("swiper-slide-active")) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
};
findindex();
prev.addEventListener("click", () => {
  findindex();
});
next.addEventListener("click", () => {
  findindex();
});
