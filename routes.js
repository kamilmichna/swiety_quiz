const Router = require('koa-router');
const router = new Router();
const serve = require('koa-static');
const question_test = {
    "content": "kremówki były ulubionyym przysmakiem świętego:",
    "answers": [{"content": "Jan Paweł II","isTrue": true},{"content": "Święty Franciszek","isTrue": false},{"content": "Matka teresa z Kalkuty",isTrue:false}]
}
router.get('/api/get_question', async(ctx,next) => {
    ctx.body = JSON.stringify(question_test);
})





module.exports = router;