class Element {
  constructor({ element = false, classID = false }) {
    this.element = "";
    this.parentElement = element || document.querySelector(classID) || false;
  }

  create({
    element = "",
    attributes = {},
    contents = {},
    children = [],
    start = false,
  } = {}) {
    const _element = document.createElement("div");

    _element.innerHTML = element;

    this.element =
      _element.children.length !== 0
        ? _element.children[0]
        : document.createElement("div");
    this.attributeChildren(children);
    _element.innerHTML = "";

    //atributos de elemento
    for (const attribute in attributes)
      this.element.setAttribute(attribute, attributes[attribute].trim());
    for (const content in contents)
      this.element[content] = contents[content].trim();

    //render si existe en el DOM
    if (this.parentElement) {
      if (start) this.parentElement.prepend(this.element);
      else this.parentElement.append(this.element);
    }
  }

  delete() {
    if (document.body.contains(this.element))
      this.element.parentElement.removeChild(this.element);
  }

  findChild(classID) {
    return this.element.querySelector(classID);
  }

  findChildren(classID) {
    return this.element.querySelectorAll(classID);
  }

  attributeChildren(children = []) {
    //atributos de los children del elemento
    children.forEach(
      ({ classID = false, attributes = {}, contents = {} } = false) => {
        const element = this.element.querySelector(classID) || false;
        if (element === false) return;
        for (const attribute in attributes)
          element.setAttribute(attribute, attributes[attribute].trim());
        for (const content in contents)
          element[content] = contents[content].trim();
      }
    );
  }
}
export default Element;
