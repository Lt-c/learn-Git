# demo
  1. 安装koa `npm install koa`

  2. 安装koa-router `npm install koa-router` 处理url
   - `const router = require('koa-router')();` 引入的是一个函数，所以需要执行，
   - `app.use(router.routes())`编写好路径之后需要使用

  3. 安装koa-bodyparser `npm install koa-bodyparser` 解析request中的body

准备重构，开启一个新的仓库