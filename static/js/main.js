import { fetchFilesytem } from "./apiCall.js";

window.onload = async () => {
  try {
    let data = await fetchFilesytem();
    const filterChildren = await data.children.filter((d, index) => index < 3);
    const newData = { ...data, children: filterChildren };
    console.log("new data", newData);
    const tree = renderFileTree(newData);
    console.log("tree....", tree);
    document.getElementById("fileBrowser1").innerHTML = tree;
  } catch (error) {
    console.log("Fetch Error :-S", error);
  }
};
// fetchFilesytem()
//   .then((data) => {
//     /** Trimmed data for test ( remove this ) */
//     const filterChildren = data.children.filter((d, index) => index < 3);
//     const newData = { ...data, children: filterChildren };
//     console.log("new data", newData);
//     const tree = renderFileTree(newData);
//     console.log("tree....", tree);
//     document.getElementById("#fileBrowser1").innerHTML = tree;
//   })
//   .catch((err) => {
//     console.log("Fetch Error :-S", err);
//   });

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

// recursive array
function renderFileTree(data) {
  if (data.children === null || data.children === "undefined") {
    return;
  }
  return `<ul>${data.children
    .map((sub) =>
      sub.children
        ? `<li class = "folder">folder: ${
            sub.name === " " ? "empty folder" : sub.name
          }<div>${renderFileTree(sub)}</div></li>`
        : `<li>file: ${sub.name}</li>`
    )
    .join(" ")}</ul>`;

  // else {
  //   // console.log("file", data.path);
  //   let fileHolderLi = createTag("li", "single-file");
  //   fileHolderLi.textContent = data.name;
  //   fileHolderUl.appendChild(fileHolderLi);
  //   console.log("file Ul", fileHolderUl);
  // }
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
