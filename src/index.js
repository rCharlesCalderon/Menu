import _ from "lodash";
import "./style.css";

const hoverMore = (() => {
  let more = document.querySelector(".drop-down");
  more.addEventListener("click", () => {
    let settingNav = document.querySelector(".more-setting");
    if (settingNav.style.display === "none") {
      settingNav.style.display = "block";
    } else {
      settingNav.style.display = "none";
    }
  });
})();
