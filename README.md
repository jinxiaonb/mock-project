# mock-project

### 环境配置
1. 安装koa2：npm install --save koa 
2. 新建server.js文件：touch server.js并编写demo
    
    const Koa = require('koa');

    var app = new Koa();

    app.use( async(ctx) => {
        ctx.body = "hello koa2";
    });
    
    app.listen(3001);//端口号，启动成功之后在浏览器localhost:3001访问

    console.log("koa start");
3. package.json配置npm启动：在scripts配置
   > "mock":"node server.js"
4. 执行npm：npm run mock(关闭terminal使用Ctrl+C)
5. 安装mockjs：npm install --save-dev mockjs
6. 根目录下新建mock-test.js:touch mock-test.js
7. 安装koa-router,koa-views,kow-bodyparser
8. 配置路由和模板引擎，参考mock-test.js
