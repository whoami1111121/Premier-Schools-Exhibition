const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header_scrolled");
  } else {
    header.classList.remove("header_scrolled");
  }
});

// const img = document.querySelector(".hero_img img");

// img.onload = () => {
//   const distance = img.offsetHeight - img.parentElement.offsetHeight;

//   img.animate(
//     [
//       { transform: "translateY(0)" },
//       { transform: `translateY(-${distance}px)` },
//     ],
//     {
//       duration: 12000,
//       iterations: Infinity,
//       easing: "linear",
//     },
//   );
// };
