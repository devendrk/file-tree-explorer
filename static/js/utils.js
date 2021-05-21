export const createTag = (tag, attribute) => {
  let element = document.createElement(tag);
  element.setAttribute("class", attribute);
  return element;
};
