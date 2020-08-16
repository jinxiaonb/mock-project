

const Router = require("koa-router");

let homeRouter = new Router();
homeRouter.get('/', async(ctx)=>{
    // ctx.body = "首页";
    await ctx.render('index');
});

module.exports = homeRouter;