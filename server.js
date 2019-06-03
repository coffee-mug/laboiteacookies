const Koa = require('koa');
const Router = require('koa-router');

// lib
const { getCookies } = require('./cookieManager.js');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Eat that cookie';
});

router.get('/domains', async (ctx, next) => {
    const domain = ctx.query.domain;
    if (!domain) {
        return new Error('Missing Argument: domain')
    }
    const cookies = await getCookies(domain);
    ctx.body = cookies;

});

app.use(router.routes());
app.listen(8000);
