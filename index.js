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
  //timer is passed into 102 and 111
  let timer = setInterval(() => {
    imageSlide();
  }, 3000);
  return { timer };
})();

function imageSlide() {
  let imageContainer = document.querySelector(".imageSlideContainer");
  imageContainer.setAttribute("image", counter.increment());
  fadeAnimation();
  toggleImages();
  threeDots();
  imgNumber();
}

function toggleImages() {
  let image1 = "./images/pyramid.jpg";
  let image2 = "./images/stonehenge.png";
  let image3 = "./images/castle.png";
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
  let imageContainer = document.querySelector(".imageSlideContainer");
  let arrowLeft = document.querySelector(".arrow-left");
  let arrowRight = document.querySelector(".arrow-right");
  arrowRight.addEventListener("click", () => {
    imageContainer.setAttribute("image", counter.increment());
    toggleImages();
    threeDots();
    imgNumber();
    clearInterval(imageFlow.timer);
    imageFlow.timer = setInterval(imageSlide, 3000);
  });

  arrowLeft.addEventListener("click", () => {
    imageContainer.setAttribute("image", counter.deincrement());
    toggleImages();
    threeDots();
    imgNumber();
    clearInterval(imageFlow.timer);
    imageFlow.timer = setInterval(imageSlide, 3000);
  });
})();

function toggleDropDown() {
  let extraNav = document.querySelector(".show-more");
  extraNav.classList.toggle("visibility");
}

function toggleArrow() {
  let arrow = document.querySelector(".arrow");
  if (arrow.getAttribute("src") === "./images/menu-down.png") {
    arrow.src = "./images/menu-up.png";
  } else {
    arrow.src = "./images/menu-down.png";
  }
}

function fadeAnimation() {
  let imageContainer = document.querySelector(".imageSlideContainer");
  imageContainer.classList.remove("fade");
  imageContainer.classList.add("fade");
}
