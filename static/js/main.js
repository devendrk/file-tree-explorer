import { fetchFilesytem } from "./apiCall.js";

window.onload = async () => {
  try {
    let data = await fetchFilesytem();
    const filterChildren = await data.children.filter((d, index) => index < 3);
    const newData = { ...data, children: filterChildren };
    console.log("new data", newData);
    const tree = renderFileTree(newData);
    document.getElementById("fileBrowser1").innerHTML = tree;

    generateDirectoryList();
  } catch (error) {
    console.log("Fetch Error :-S", error);
  }
};

function generateDirectoryList() {
  var toggler = document.getElementsByClassName("folder");

  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".files").classList.toggle("expanded");

      this.classList.toggle("folder-down");
    });
  }
}

// recursive array
function renderFileTree(data) {
  if (data.children === null || data.children === "undefined") {
    return;
  }

  //  data.path === "/" && `<li>file: ${data.path}</li>`;
  return data.children
    .map((sub) =>
      sub.children
        ? `<li ><span class = "folder">folder: ${
            sub.name === "" ? "empty folder" : sub.name
          }</span><ul class ="files">${renderFileTree(sub)}</ul></li>`
        : `<li>file: ${sub.name}</li>`
    )
    .join(" ");
}
