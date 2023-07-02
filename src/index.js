import _, { concat, toNumber } from "lodash";
import html from "../dist/index.html";
import "./style.css";

const counter = (() => {
  let slideCounter = 0;
  function increment() {
    if (slideCounter >= 3) {
      slideCounter = 0;
    }
    slideCounter++;
    return slideCounter;
  }

  function deincrement() {
    if (slideCounter <= 1) {
      slideCounter = 4;
    }
    slideCounter--;
    return slideCounter;
  }

  return { increment, deincrement };
})();

const ToggleMore = (() => {
  let more = document.querySelector(".more");
  more.addEventListener("click", () => {
    toggleDropDown();
    toggleArrow();
  });
})();

function imgNumber() {
  //get da number
  let imageContainer = document.querySelector(".imageSlideContainer");
  let imageNumber = imageContainer.getAttribute("image");
  //
  let imgNum = document.querySelector(".image-number");
  imgNum.textContent = `${imageNumber}/3`;
}

function threeDots() {
  let imageContainer = document.querySelector(".imageSlideContainer");
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  if (imageContainer.getAttribute("image") === "1") {
    dots[0].classList.add("active");
  } else if (imageContainer.getAttribute("image") === "2") {
    dots[1].classList.add("active");
  } else if (imageContainer.getAttribute("image") === "3") {
    dots[2].classList.add("active");
  }
}

const imageFlow = (() => {
  let imageContainer = document.querySelector(".imageSlideContainer");
  imageContainer.setAttribute("image", counter.increment());
  threeDots();
  toggleImages();
  let timer = setInterval(function () {
    imageContainer.setAttribute("image", counter.increment());
    toggleImages();
    threeDots();
    imgNumber();
  }, 3000);
  return { timer };
})();

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
  arrowRight.addEventListener("click", () => {
    imageSlide.setAttribute("image", counter.increment());
    toggleImages();
    threeDots();
    imgNumber();
    clearInterval(imageFlow.timer);
  });

  arrowLeft.addEventListener("click", () => {
    imageSlide.setAttribute("image", counter.deincrement());
    toggleImages();
    threeDots();
    imgNumber();
    clearInterval(imageFlow.timer);
  });
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
