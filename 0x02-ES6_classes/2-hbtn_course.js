export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLen) {
    if (typeof newLen !== 'number' || newLen <= 0) {
      throw new Error('Length must be a positive number');
    }
    this._length = newLen;
  }

  get students() {
    return this._students;
  }

  set students(newStud) {
    if (!Array.isArray(newStud)) {
      throw new Error('Students must be an array');
    }
    newStud.forEach((x) => {
      if (typeof x !== 'string') {
        throw new Error('Students must be an array of strings');
      }
    });
    this._students = newStud;
  }
}
