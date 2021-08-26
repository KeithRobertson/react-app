class Util {

  value = 0;

  static increment (number) {
    return number + 1;
  }

  increment() {
    return ++this.value;
  }
}

export default Util;