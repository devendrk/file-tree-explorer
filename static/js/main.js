import { fetchApi } from "./apiCall.js";
fetchApi();

var hierarchy = document.getElementById("hierarchy");
hierarchy.addEventListener("click", function (event) {
  var elem = event.target;
  if (elem.tagName.toLowerCase() === "li" && elem !== event.currentTarget) {
    var type = elem.classList.contains("far") ? "folder" : "file";

    if (type == "folder") {
      var isexpanded = elem.dataset.isexpanded == "true";
      if (isexpanded) {
        elem.classList.remove("fa-caret-down");
        elem.classList.add("fa-caret-right");
      } else {
        elem.classList.remove("fa-caret-right");
        elem.classList.add("fa-caret-down");
      }
      elem.dataset.isexpanded = !isexpanded;

      var toggleelems = [].slice.call(elem.parentElement.children);
      var classnames = "file,foldercontainer,noitems".split(",");

      toggleelems.forEach(function (element) {
        if (
          classnames.some(function (val) {
            return element.classList.contains(val);
          })
        )
          element.style.display = isexpanded ? "none" : "block";
      });
    }
  }
});
