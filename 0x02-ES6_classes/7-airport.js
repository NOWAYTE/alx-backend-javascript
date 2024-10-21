export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error();
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
