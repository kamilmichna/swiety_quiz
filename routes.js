const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static');
const question_test = {
    "content": "kremówki były ulubionyym przysmakiem świętego:",
    "answers": ["Jan Paweł II", "Pius XX", "Ojciec Pio","Matka Teresa z Kalkuty"]
}
router.get('/api/get_question', async(ctx,next) => {
    ctx.body = JSON.stringify(question_test);
})





module.exports = router;