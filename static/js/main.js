import { fetchApi } from "./apiCall.js";
fetchApi();

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  console.log("i", i, "toggler", toggler[i]);
  toggler[i].addEventListener("click", function () {
    console.log(
      "parent element",
      this.parentElement.querySelector(".nested"),
      "thiiiss",
      this
    );
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
