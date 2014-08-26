/* jshint esnext:true */
var koa = require('koa');
var app = koa();
var port = process.argv[2];
var fs = require('fs');

app.use(function* (next){
  if (this.path !== '/stream') return yield next;

  this.body = fs.createReadStream(process.argv[3]);
});

app.use(function* (next){
  if (this.path !== '/json') return yield next;

  this.body = { foo: 'bar'};
});

app.listen(port);
