import _ from "lodash";
import "./style.css";

const ToggleMore = (() => {
  let more = document.querySelector(".more");
  more.addEventListener("click", () => {
    toggleDropDown();
    toggleArrow();
  });
})();

const imageFlow = (() => {
  let imageContainer = document.querySelector(".imageSlideContainer");
  let image1 = "../src/images/pyramid.png";
  let image2 = "../src/images/stonehenge.png";
  let image3 = "../src/images/castle.png";
  let imageArray = [image1, image2, image3];
  let slideCounter = 0;

  setInterval(function () {
    imageContainer.style.backgroundImage = `url("${imageArray[slideCounter]}")`;
    slideCounter++;
    if (slideCounter == imageArray.length) {
      slideCounter = 0;
    }
  }, 3000);
})();



const imageSlider = (() => {
  let imageSlide = document.querySelector(".imageSlideContainer");
})();

function toggleDropDown() {
  let extraNav = document.querySelector(".show-more");
  extraNav.classList.toggle("visibility");
}

function toggleArrow() {
  let arrow = document.querySelector(".arrow");
  if (arrow.getAttribute("src") === "../src/images/menu-down.png") {
    arrow.src = "../src/images/menu-up.png";
  } else {
    arrow.src = "../src/images/menu-down.png";
  }
}