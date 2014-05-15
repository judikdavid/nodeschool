var http = require('http');
var concatStream = require('concat-stream');
var urls = process.argv.slice(2);

var responses = [];
var count = 0;

urls.forEach(function(url) {
  http.get(url, function(response) {
    response.pipe(concatStream(function(data) {
      responses[url] = data.toString();
      count++;
      if (count === urls.length) {
        urls.forEach(function(url) {
          console.log(responses[url]);
        });
      }
    }));
  });
});
