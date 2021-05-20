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
      document.querySelector("#root").innerText = data.path;
      console.log("data...", data);
      createNode(data);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

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

// recursive array
function createNode(data) {
  if (data === null || data === undefined) return;
  if (data.children !== undefined) {
    console.log("folder", data.name, data.path);
    data.children.forEach((fs) => {
      createNode(fs);
    });
  } else {
    console.log("file", data.path);
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === null) {
  //     console.log("empty file or folder", arr[i]);
  //   } else if (arr[i]["type"] === "folder") {
  //     // console.log("this is folder", arr[i]);
  //     createNode(arr[i]);
  //     // console.log("this is INNER folder", arr[i]);
  //   } else {
  //     // console.log("this file", arr[i]);
  //   }
  // }
}
