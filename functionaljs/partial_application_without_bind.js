var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    var messages = slice.apply(arguments);
    console.log.apply(this, [namespace].concat(messages));
  };
}

module.exports = logger;
