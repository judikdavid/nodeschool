/* jshint esnext:true */
var koa = require('koa');
var app = koa();
var port = process.argv[2];
var parse = require('co-body');

app.use(function* (next) {
  if (this.method !== 'POST') return yield next;
  var body = yield parse(this);

  if (!body.name) {
    this.throw(400, '.name required!');
  }

  this.body = body.name.toUpperCase();
});

app.listen(port);
