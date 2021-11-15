class quatsion {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  element = function () {
    let typeElement;
    ///text
    if (this.type === 0) {
      typeElement = <input />;
    }

    ///numeric
    if (this.type === 1) {
      typeElement = <div></div>;
    }
    return typeElement;
  };
}

export { quatsion };
