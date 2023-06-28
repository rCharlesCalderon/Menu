import _, { concat, toNumber } from "lodash";
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
  let increment = counter();
  imageContainer.setAttribute("image", increment());
  toggleImages();
  setInterval(function () {
    imageContainer.setAttribute("image", increment());
    toggleImages();
  }, 3000);
})();

function counter() {
  let slideCounter = 0;
  return () => {
    if (slideCounter === 3) {
      slideCounter = 0;
    }
    slideCounter++;
    return slideCounter;
  };
}
//call counter
//side = 0
//return

//make the function that increments
//set attributes based on increment
//make a function that places the images based on the imcrement

function toggleImages() {
  let image1 = "../src/images/pyramid.jpg";
  let image2 = "../src/images/stonehenge.png";
  let image3 = "../src/images/castle.png";
  let imageArray = [image1, image2, image3];
  let imageContainer = document.querySelector(".imageSlideContainer");
  if (imageContainer.getAttribute("image") === "1") {
    imageContainer.style.backgroundImage = `url("${imageArray[0]}")`;
  } else if (imageContainer.getAttribute("image") === "2") {
    imageContainer.style.backgroundImage = `url("${imageArray[1]}")`;
  } else if (imageContainer.getAttribute("image") === "3") {
    imageContainer.style.backgroundImage = `url("${imageArray[2]}")`;
  }
}

const imageSlider = (() => {
  let imageSlide = document.querySelector(".imageSlideContainer");
  let arrowLeft = document.querySelector(".arrow-left");
  let arrowRight = document.querySelector(".arrow-right");
  arrowRight.addEventListener("click", () => {});
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
