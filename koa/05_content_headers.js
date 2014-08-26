/* jshint esnext:true */
var koa = require('koa');
var app = koa();
var port = process.argv[2];

app.use(function* (next){
  if (this.request.type === 'application/json') {
    this.body = {message: 'hi!'};
  }
  else {
    this.body = 'ok';
  }
});

app.listen(port);
