const Koa = require('koa');
var app = new Koa();

app.use( async(ctx) => {
    ctx.body = "hello koa2";
});

app.listen(3001);

console.log("koa start");