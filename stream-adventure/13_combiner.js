var combine = require('stream-combiner');
var through = require('through');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
  var tr = through(write, end);
  var book_by_genres;

  function write(line){
    if (line.length === 0) return;
    line = JSON.parse(line);

    if (line.type === 'genre'){
      if (book_by_genres){
        this.queue(JSON.stringify(book_by_genres) + '\n');
      }
      book_by_genres = {
        name : line.name,
        books : []
      };
    } else if (line.type === 'book'){
      book_by_genres.books.push(line.name);
    }
  }

  function end(){
    if (book_by_genres){
      this.queue(JSON.stringify(book_by_genres) + '\n');
    }
    this.queue(null);
  }

  return combine(
    split(),
    tr,
    zlib.createGzip()
  );
};
