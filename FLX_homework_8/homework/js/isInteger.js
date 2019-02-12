function isInteger(num) {
  return (num ^ 0) === num;
}
console.log( isInteger(5) );