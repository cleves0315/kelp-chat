const Koa = require('koa')
const Router = require('koa-router')
const mongoose = require('mongoose')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser');
const passport = require('koa-passport')


const app = new Koa()
const router = new Router()


const usersRouter = require('./routers/api/users')

// 连接数据库
mongoose.connect(
  'mongodb+srv://dome1:demo1@cluster0.ffkwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
).then(() => {
  console.log('mongodb connected~');
})
.catch(err => {
  console.log(err);
})


app.use(cors({
  origin: function (ctx) {
      return 'http://localhost:3000';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],  // 需要获取其他字段时
  maxAge: 5,
  credentials: true,  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  allowMethods: ['GET', 'POST', 'DELETE'],  // 设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
}))



app.use(bodyParser())
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
// 配置路由
app.use(router.routes()).use(router.allowedMethods())

router.use('/api/users', usersRouter)




const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server started on ${port}`)
})
