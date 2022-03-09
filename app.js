const Koa = require('koa');
// 因为require('koa-router') 返回的是一个函数
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();
//由于middleware的顺序很重要，需要在router之前被注册到app对象上
app.use(bodyParser());



app.use(async (ctx, next) => {
  // console.log(next);
  await next();// await next() 调用下一个async函数
  // ctx.response.type = 'text/html';
  // ctx.response.body = '<h1>Hello Koa2!</h1>'
  console.log(`我是第一个函数,${ctx.request.method},${ctx.request.url}`);
  // console.log(ctx);
})
// add url-route
router.post('/signin', async (ctx, next) => {
  var
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
  <p><a href="/">Try again</a></p>`;
  }
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});
//  add router middleware
app.use(router.routes())


// 把每一个async函数称为middleware 也就是中间件
// app.use() 的顺序就是middleware的执行顺序
// 如果没有 调用 await next()， 那么就不会后续的 app.use()
app.use(async (ctx, next) => {
  await next();
  console.log('我是第二个async函数');
})
app.use(async (ctx, next) => {
  console.log('我是第三个async函数');
})

app.listen(3000);
console.log('app started at port 3000...')