const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static');
const getQuestion = require('./getQuestion');

router.get('/api/get_question', async(ctx,next) => {
    ctx.body = getQuestion();
})





module.exports = router;