import _ from "lodash";
import "./style.css";

const ToggleMore = (() => {
  let more = document.querySelector(".more");
  more.addEventListener("click", () => {
    let extraNav = document.querySelector(".show-more");
    if (window.getComputedStyle(extraNav, "hidden")) {
      extraNav.style.visibility = "visible";
    } else {
      extraNav.style.visibility = "hidden";
    }
  });
})();