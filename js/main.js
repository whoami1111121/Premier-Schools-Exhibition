const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header_scrolled");
  } else {
    header.classList.remove("header_scrolled");
  }
});

const logos_track_slider = document.querySelector(".logos_track");

let isDown = false;
let startX;
let scrollLeft;

logos_track_slider.addEventListener("mousedown", (e) => {
  isDown = true;
  logos_track_slider.style.cursor = "grabbing";

  startX = e.pageX - logos_track_slider.offsetLeft;
  scrollLeft = logos_track_slider.scrollLeft;
});

logos_track_slider.addEventListener("mouseleave", () => {
  isDown = false;
  logos_track_slider.style.cursor = "grab";
});

logos_track_slider.addEventListener("mouseup", () => {
  isDown = false;
  logos_track_slider.style.cursor = "grab";
});

logos_track_slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  const x = e.pageX - logos_track_slider.offsetLeft;
  const walk = (x - startX) * 2;

  logos_track_slider.scrollLeft = scrollLeft - walk;
});

const logos_track_slider2 = document.querySelector(".logos_track2");

let isDown2 = false;
let startX2;
let scrollLeft2;

logos_track_slider2.addEventListener("mousedown", (e) => {
  isDown2 = true;
  logos_track_slider2.style.cursor = "grabbing";

  startX2 = e.pageX - logos_track_slider2.offsetLeft;
  scrollLeft2 = logos_track_slider2.scrollLeft;
});

logos_track_slider2.addEventListener("mouseleave", () => {
  isDown2 = false;
  logos_track_slider2.style.cursor = "grab";
});

logos_track_slider2.addEventListener("mouseup", () => {
  isDown2 = false;
  logos_track_slider2.style.cursor = "grab";
});

logos_track_slider2.addEventListener("mousemove", (e) => {
  if (!isDown2) return;

  e.preventDefault();

  const x = e.pageX - logos_track_slider2.offsetLeft;
  const walk = (x - startX2) * 2;

  logos_track_slider2.scrollLeft = scrollLeft2 - walk;
});
