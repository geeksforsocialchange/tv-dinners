import { isEqual } from 'lodash';

export default class Table {
  constructor(name, includedFields = []) {
    this.name = name;
    this._includedFields = includedFields;
    this._records = [];
  }

  set records(records) {
    const columns = Object.keys(records[0].fields);
    if (!isEqual(this._includedFields, columns)) throw 'Incorrect fields';

    this._records = records;
  }

  get fields() {
    return this._includedFields.map(field => `fields%5B%5D=${field}`).join('&');
  }

  get columns() {
    return this._includedFields;
  }

  get rows() {
    return this._records.map(record => record.fields);
  }
}
