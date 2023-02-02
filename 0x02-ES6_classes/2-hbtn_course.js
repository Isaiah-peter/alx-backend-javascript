export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === "string") {
      this._name = name;
    } else {
      throw new TypeError("Name must be a string");
    }
    if (typeof (length) === "number") {
      this._length = length;
    } else {
      throw new TypeError("Length must be a number");
    }

    if (typeof (students) === "object") {
      this.students = students;
    } else {
      throw new TypeError("Students must be an array");
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    this._length;
  }

  get name() {
    this.students;
  }

  set name(name) {
    if (typeof name === "string") {
      this._name = name;
    } else {
      throw new TypeError("Name must be a string");
    }
  }

  set length(length) {
    if (typeof length === "number") {
      this._length = length;
    } else {
      throw new TypeError("Length must be a number");
    }
  }

  set students(students) {
    if (typeof students === "object") {
      this._students = students;
    } else {
      throw new TypeError("Students must be an array");
    }
  }
}
