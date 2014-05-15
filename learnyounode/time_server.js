var net = require('net');

var server = net.createServer(function(socket) {
  var date = getFormattedDate();
  socket.end(date + '\n');
});

server.listen(process.argv[2]);

var getFormattedDate = function() {
  var date   = new Date(),
      year   = date.getFullYear(),
      month  = date.getMonth() + 1,
      day    = date.getDate(),
      hour   = date.getHours(),
      minute = date.getMinutes();

  return year + '-' + prefix(month) + '-' + prefix(day) + ' ' +
         prefix(hour) + ':' + prefix(minute);
};

var prefix = function(val) {
  return val < 10 ? '0' + val : val;
};
