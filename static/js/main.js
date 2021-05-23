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
  if (data.children === null || data.children === undefined) {
    return;
  } else if (data.path === "/") {
    const modifiedDateTime = new Date(data.mtime);
    const isModifiedToday = isSameDay(modifiedDateTime);
    return `<li class="row">
    <p>${data.path}</p>
    <p class = "row-date">${
      isModifiedToday
        ? modifiedDateTime.toLocaleTimeString("en-GB")
        : modifiedDateTime.toLocaleDateString()
    }</p>
    </li>
    ${DirectoryComponent(data)}`;
  } else {
    return DirectoryComponent(data);
  }
}

function DirectoryComponent(data) {
  return data.children
    .map((sub) => {
      const modifiedDateTime = new Date(sub.mtime);
      const isModifiedToday = isSameDay(modifiedDateTime);
      return sub.children
        ? `<li>
              <div class ="container folder">
              <div class ="row">
                <p>
                  ${sub.name === "" ? "empty folder" : sub.name}
                    <span>${sub.children.length}</span>
                </p>
                <p class ="row-date">${
                  isModifiedToday
                    ? modifiedDateTime.toLocaleTimeString("en-GB")()
                    : modifiedDateTime.toLocaleDateString()
                }</p>
              </div>
            </div>
            <ul class ="files">
              ${renderFileTree(sub)}
            </ul>
          </li>`
        : `<li class="row">
        <p>${sub.name}</p>
        <p cass ="row-date">${
          isModifiedToday
            ? modifiedDateTime.toLocaleTimeString("en-GB")()
            : modifiedDateTime.toLocaleDateString()
        }</p>
        </li>`;
    })
    .join(" ");
}

const isSameDay = (modifiedDate) => {
  const today = new Date();
  return (
    today.getFullYear() === modifiedDate.getFullYear() &&
    today.getMonth() === modifiedDate.getMonth() &&
    today.getDate() === modifiedDate.getDate()
  );
};
