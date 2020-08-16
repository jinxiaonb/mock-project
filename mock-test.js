
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require('path');

//所有引入的代码放在最上面，第三方的在自己写的上面
//apitest  路由配置
const homeRouter = require('./router/home');//
const apiTest = require('./router/profile');

const app = new Koa();

app.use(bodyParser());//支持post请求
app.use(views(path.join(__dirname,'./views'),{//配置ejs模板引擎
    extension:'ejs'
}));

//路由配置
var appRouter = new Router();
appRouter.use('/', homeRouter.routes(), apiTest.allowedMethods());
appRouter.use("/apiTest", apiTest.routes(), apiTest.allowedMethods());
app.use(appRouter.routes()).use(appRouter.allowedMethods());

//接口监听
app.listen(3001);
console.log("koa-router run");