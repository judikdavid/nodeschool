var duplexer = require('duplexer');
var through = require('through');

module.exports = function(counter){
  var count = {};
  var input = through(write, end);
  return duplexer(input, counter);

  function write(buf){
    count[buf.country] = (count[buf.country] || 0) + 1;
  }

  function end(){
    counter.setCounts(count);
  }
};
