class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'/s]+/g, '');
  }

  static titleize(string) {
    return string.split(" ").map( word => Formatter.capitalize(word)).join(" ");
  }
}
