import Koa from 'koa'
import Router from 'koa-router'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import passport from 'koa-passport'
import config from './config/config'
import DBConnect from './sequelize'
import passportConfig from './utils/passport'

import userRouter from './controllers/user.controller'
import chatRouter from './controllers/chat.controller'

const app = new Koa()
const router = new Router()

// 连接数据库
DBConnect()

app.use(cors(config.corsArgs))
app.use(bodyParser())
app.use(passport.initialize())
app.use(passport.session())
passportConfig(passport)
// 配置路由
app.use(router.routes()).use(router.allowedMethods())

router.use('/api/user', userRouter)
router.use('/api/chat', chatRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server started on ${port}`)
})
