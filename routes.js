const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static');

router.get('/api/question', async(ctx,next) => {
    ctx.body = JSON.stringify({"chuj": "gnuj"});
})





module.exports = router;