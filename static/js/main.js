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
      const filterChildren = data.children.filter((d, index) => index < 4);
      const newData = { ...data, children: filterChildren };
      console.log("new data", newData);
      // createNode(newData);
      recursion(newData);
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

// function generateDirectoryList() {
//   var toggler = document.getElementsByClassName("folder");
//   console.log(toggler.length);
//   for (let i = 0; i < toggler.length; i++) {
//     console.log("i", i, "toggler", toggler[i]);
//     toggler[i].addEventListener("click", function () {
//       this.parentElement.querySelector(".file").classList.toggle("expanded");
//       this.classList.toggle("folder-down");
//     });
//   }
// }

/**
 *
 * @param {string} tag
 * @param {string} attributeName
 * @returns HTML element such as <P class = "attribute name"> </p>
 */
function createTag(tag, attribute) {
  let element = document.createElement(tag);
  element.setAttribute("class", attribute);
  return element;
}
let li = createTag("li", "folder");
li.textContent = "fuck";
console.log(li);

// recursive array
const parentEl = document.getElementById("#fileBrowser1");
function RenderFileTree(data) {
  if (data === null || data === undefined) return;
  if (data.children !== undefined) {
    // console.log("folder", data.name, data.path);
    let li = createTag("li", "folder");
    li.innerText = data.name;
    console.log("FOLDER: liii...", li, "dnamee:", data.name);
    data.children.forEach((fs) => {
      RenderFileTree(fs);
      let fileHolderUl = createTag("ul", "files");
      return fileHolderUl;
    });
  } else {
    // console.log("file", data.path);
    let fileHolderLi = createTag("li", "single-file");
    fileHolderLi.textContent = data.name;
    fileHolderUl.appendChild(fileHolderLi);
    console.log("file Ul", fileHolderUl);
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
