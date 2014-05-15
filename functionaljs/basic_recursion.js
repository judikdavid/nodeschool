var index = 0;
module.exports = function reduce(arr, fn, initial) {
  if (!arr.length) {
    return initial;
  }

  var head = arr[0],
      tail = arr.slice(1);

  initial = fn(initial, head, index++, arr);

  return reduce(tail, fn, initial);
};
