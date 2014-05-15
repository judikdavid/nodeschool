function repeat(operation, num) {
  if (num > 0) {
    operation();
    repeat(operation, --num);
  }
}

module.exports = repeat;
