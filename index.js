class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let array = string.split(" ");
    array.unshift(this.capitalize(array.shift()));
    let result = array.map( word => {
      if (exceptions.includes(word)) {
        return word;
      } else {
        return this.capitalize(word));
      }
    });
    return result.join(" ");
  }
}
