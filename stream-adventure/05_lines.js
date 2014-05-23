var split = require('split');
var through = require('through');
var even = 0;
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
      even = even ? 0 : 1;  
      var line = line.toString();
      if (even){
        this.queue(line.toLowerCase() + '\n');
      }
      else{
        this.queue(line.toUpperCase() + '\n');
      }
    }))
    .pipe(process.stdout)
;
