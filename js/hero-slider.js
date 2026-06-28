//

const carousel_slider = document.querySelector(".carousel_slider");
const cards = document.querySelectorAll(".card");

const visibleCards = 4;
let index = 0;

// Clone first 4 cards
for (let i = 0; i < visibleCards; i++) {
  carousel_slider.appendChild(cards[i].cloneNode(true));
}

const total = document.querySelectorAll(".card").length;

function moveSlider() {
  carousel_slider.style.transition = ".5s";
  carousel_slider.style.transform = `translateX(-${index * 25}%)`;

  if (index === 6) {
    setTimeout(() => {
      carousel_slider.style.transition = "none";
      index = 0;
      carousel_slider.style.transform = `translateX(0%)`;
    }, 500);
  }
}

function next() {
  index++;
  moveSlider();
}

function prev() {
  if (index === 0) {
    carousel_slider.style.transition = "none";
    index = 6;
    carousel_slider.style.transform = `translateX(-${index * 25}%)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        index--;
        moveSlider();
      });
    });
  } else {
    index--;
    moveSlider();
  }
}

document.getElementById("next").onclick = next;
document.getElementById("prev").onclick = prev;

setInterval(next, 2000);
