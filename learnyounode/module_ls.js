module.exports = function (dir, extension, callback) {

  var fs = require('fs'),
      path = require('path'),
      filelist = [];

  fs.readdir(dir, function (err, list) {
      if (err) {
        return callback(err);
      }

      list.forEach(function(file) {
        if (path.extname(file) === '.' + extension) {
          filelist.push(file);
        }
      });

      return callback(null, filelist);
  });

};
