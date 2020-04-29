export default class Table {
  constructor(name, includedFields = []) {
    this.name = name;
    this._includedFields = includedFields;
  }

  get fields() {
    return this._includedFields.map(field => `fields%5B%5D=${field}`).join('&');
  }
}
