const Koa = require('koa');
const cors = require('@koa/cors');
// Create Koa app
const app = new Koa();

// Serve requests, here, printing out a simple greeting
app.use(cors()); //cors
app.use(async ctx => {  
    ctx.body = JSON.stringify({"chuj":"cwel"})
});

// Start the server
app.listen(2000);  