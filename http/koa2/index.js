

const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

const app = new Koa();

app.use(async(ctx,next)=>{
    await next();
    console.log('第一个中间件')
})

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>大爷楼上请</h1>';
});
router.get('/girl/:name',async (ctx,next)=>{
    console.log('fuck')
    var name = ctx.params.name;
    ctx.response.body = `<h1>${name}接客</h1>`;
    await next();
})


// 路由房子最后
app.use(router.routes());

app.listen(8787);
console.log('怡红院开门了')