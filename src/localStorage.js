/* eslint max-classes-per-file: ["error", 3] */

// local Storage
export default class Storage {
  static addToStorage(todoArr) {
    const storage = localStorage.setItem('leaders', JSON.stringify(todoArr));
    return storage;
  }

  static getStorage() {
    const storage = localStorage.getItem('leaders') === null
      ? [] : JSON.parse(localStorage.getItem('leaders'));
    return storage;
  }
}