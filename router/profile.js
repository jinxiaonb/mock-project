const Mock = require("mockjs");
const Router = require("koa-router");

let apiTest = new Router();
apiTest.get("/profile",async(ctx)=>{
    var data = Mock.mock({
        'list|1-10':[{
            'id|+1':1,
            'user_id|100-200':1,
            'status|1':true,
            'user_name':'@cname'
        }],
        code:0,
        message:"success"
    });
    ctx.body = data;
});

apiTest.post('/person', async(ctx) => {
    console.log(ctx.request.body);
    var reqData = ctx.request.body;
    var data = Mock.mock({
        'listpost|1-10':[{
            'age|+1':1
        }]
    });
    ctx.body = reqData;
});

module.exports = apiTest;