
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require('path');


//apitest
const homeRouter = require('./router/home');
const apiTest = require('./router/profile');

const app = new Koa();

app.use(bodyParser());
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}));


var appRouter = new Router();
appRouter.use('/', homeRouter.routes(), apiTest.allowedMethods());
appRouter.use("/apiTest", apiTest.routes(), apiTest.allowedMethods());

app.use(appRouter.routes()).use(appRouter.allowedMethods());

app.listen(3001);
console.log("koa-router run");