function Spy(target, method) {
  var counter = { count: 0 },
      oldMethod = target[method];
        
  target[method] = function() {
    counter.count++;
    return oldMethod.apply(target, arguments);
  };

  return counter;
}

module.exports = Spy;
