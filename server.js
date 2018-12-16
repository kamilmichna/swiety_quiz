const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const json = require('koa-json')
const port = process.env.PORT || 5000;

// Create Koa app
const app = new Koa();
const router = require('./routes');
// Serve requests, here, printing out a simple greeting
app.use(json());
app
    .use(router.routes())
    .use(router.allowedMethods());
app.use(serve(__dirname + '/client/build'));
app.use(serve(__dirname+'/public'));
app.use(cors()); //cors


// Start the server
app.listen(port,()=>{
    console.log("server is working")
});