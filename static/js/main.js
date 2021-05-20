function fetchApi() {
  fetch("../filesystem.json")
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log("data", data);
        createElement("li", "file");
        return;
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
fetchApi();
function generateDirectoryList(data) {
  console.log("i am from fu", data, "l..", data.children.length);
  var toggler = document.getElementsByClassName("folder");
  console.log(toggler.length);
  for (let i = 0; i < toggler.length; i++) {
    console.log("i", i, "toggler", toggler[i]);
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".file").classList.toggle("expanded");
      this.classList.toggle("folder-down");
    });
  }
}

function createElement(el, attributeName) {
  const element = document.createElement(el, { class: attributeName });
  console.log("element created", element);
  return element;
}
