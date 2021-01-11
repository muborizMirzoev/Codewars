Array.prototype.groupBy = function (fn) {
  const obj = {}

  if (!fn) {
    this.forEach(item => {
      if (!obj.hasOwnProperty(item)) {
        obj[item] = [item]
      } else {
        obj[item].push(item)
      }
    })
  } else {
    this.forEach((item, index) => {
      const subItem = fn(item);
      if (!obj[subItem]) {
        obj[subItem] = [item]
      } else {
        obj[subItem].push(item)
      }
    })
  }
  return obj;
}




let a = [1, 2, 3, 2, 4, 1, 5, 1, 6].groupBy(function (val) {
  return val % 3;
});

console.log(a);