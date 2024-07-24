const element = {
  type: "a",
  props: {
    href: "google.com",
    target: "_blank",
  },
  Children: "This is link of google",
};
function customRendor(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.Children;
  for (let prop in element.props) {
    if (prop === "Children") continue;
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

const root = document.querySelector("#root");
customRendor(element, root);
