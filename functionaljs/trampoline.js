function repeat(operation, num) {
  var _repeat = trampoline(function mySelf(operation, num) {
    if (num <= 0) {
      return;
    }
    return function() {
      operation();
      return mySelf(operation, --num);
    };
  });

  return _repeat(operation, num);
}

function trampoline(fn) {
  return function() {
    var repeat = fn.apply(fn, arguments);

    while (repeat instanceof Function) {
      repeat = repeat();
    }

    return repeat;
  };
}

module.exports = function(operation, num) {
    return repeat(operation, num);
};
