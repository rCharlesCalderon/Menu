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
  let image = document.querySelector(".imageSlideContainer");
  changeImg();
})();

function changeImg() {
  let image = document.querySelector(".imageSlideContainer");
  let image1 = "../src/images/castle.png";
  let image2 = "../src/images/pyramid.png";
  let image3 = "../src/images/stonehenge.png";
  let imageArray = [image1, image2, image3];
  let slideCounter = 0;
  console.log(image);
}

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