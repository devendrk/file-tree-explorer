import { fetchFilesytem } from "./apiCall.js";
import { isSameDay, renderFieModifiedStatus } from "./utils.js";

window.onload = async () => {
  try {
    let loader = `<div class="loader"></div>`;
    document.getElementById("fileBrowser1").innerHTML = loader;
    let data = await fetchFilesytem();
    // const filterChildren = await data.children.filter((d, index) => index < 3);
    // const newData = { ...data, children: filterChildren };
    console.log("new data", data);
    const tree = renderFileTreeComponent(data);

    document.getElementById("fileBrowser1").innerHTML = tree;
    directoriesTreeToggler();
  } catch (error) {
    console.log("Fetch Error :-S", error);
  }
};

/**
 *  Adds click eventlistener to folders-caret element
 * adds toggle switch on click
 */
const directoriesTreeToggler = () => {
  const folders = document.getElementsByClassName("folders-caret");

  for (let i = 0; i < folders.length; i++) {
    folders[i].addEventListener("click", function () {
      this.parentElement.querySelector(".files").classList.toggle("expanded");

      this.classList.toggle("folders-caret-down");
    });
  }
};

/**
 *
 * @param {object} data
 * @returns
 */

const renderFileTreeComponent = (data) => {
  if (data.children === null || data.children === undefined) {
    return;
  } else if (data.path === "/") {
    // renders root folders-caret and children directories
    return `<li class="row">
    <p>${data.path} <span>(${data.children.length} items)</span></p>
    <p class = "row-date">
    ${renderFieModifiedStatus(data.mtime, isSameDay)}
    </p>
    </li>
    ${directoryComponent(data)}`;
  } else {
    // renders only children directories
    return directoryComponent(data);
  }
};

/**
 *
 * @param {object} data
 * @returns string  // HTML elements strings
 */
const directoryComponent = (data) => {
  return (
    data &&
    data.children
      .map((sub) => {
        return !sub
          ? ``
          : sub.children
          ? `<li>
              <div class ="container folders-caret">
              <div class ="row">
                <p>
                  ${sub.name}
                    <span>(${sub.children.length} items)</span>
                </p>
                <p class ="row-date">
                  ${renderFieModifiedStatus(sub.mtime, isSameDay)}
                </p>
              </div>
            </div>
            <ul class ="files">
              ${renderFileTreeComponent(sub)}
            </ul>
          </li>`
          : `<li class="row">
        <p>${sub.name}</p>
        <p class ="row-date">
        ${renderFieModifiedStatus(sub.mtime, isSameDay)}
        </p>
        </li>`;
      })
      .join(" ")
  );
};
