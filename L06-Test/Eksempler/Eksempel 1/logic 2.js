// function add(x,y) {
//   return x + y
// }

// let subtract = (x,y) => {
//   return x - y
// }

// exports = {add, subtract}
exports.add = (x,y) => {
  if (x<0) {
    return -x+y;
  }
  return x + y
}

exports.subtract = (x,y) => {
  return x - y
}
