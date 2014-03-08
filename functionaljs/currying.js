function curryN(fn, n) {
  function _curryN(fn, n, args) {
    if (n === 0) {
      return fn.apply(null, args);
    }

    return function(x) {
      return _curryN(fn, n - 1, args.concat(x));
    };
  }

  n = n == null ? fn.length : n;
  return _curryN(fn, n, []);
}

module.exports = curryN;
