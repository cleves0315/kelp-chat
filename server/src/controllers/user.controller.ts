// 控制层用来分发路由，处理传入的HTTP请求。
import Router from 'koa-router'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'koa-passport'
import usersModel from '../models/users.model'

import keys from '../utils/keys'
import { validatorLogin, validatorRegister } from '../utils/validation'

const router = new Router()

router.post('/register', async ctx => {
  const result = ctx.request.body
  const findResult = await usersModel.find({name: result.name})

  const { errors, isValid } = validatorRegister(result)

  if (!isValid) {
    ctx.status = 400
    ctx.body = errors
    return
  }


  // 不存在数据，则录入数据库
  if (!findResult.length) {
    const newUser = new usersModel({
      name: result.name,
      password: result.password,
    })

    // 密码加密
    const salt = bcrypt.genSaltSync(10)
    newUser.password = bcrypt.hashSync(newUser.password, salt)

    await newUser
      .save()
      .then(user => {
        ctx.status = 200
        ctx.body = { code: 1, user }
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    ctx.body = {
      code: 1,
      message: '该用户已存在'
    }
  }
})


/**
 * @desc 登录接口地址 返回token
 * @access 接口公开
 */
 router.post('/login', async ctx => {
  const { account, password } = ctx.request.body

  const { errors, isValid } = validatorLogin({name: account, password})

  if (!isValid) {
    ctx.status = 400
    ctx.body = errors
    return
  }

  // 查询数据
  const userResult = await usersModel.find({ name: account })

  if (!userResult.length) {
    ctx.status = 404
    ctx.body = {
      code: 0,
      message: '用户名不存在'
    }
  } else {
    // 验证加密密码
    const result = bcrypt.compareSync(password, userResult[0].password)

    if (result) {
      // 返回token
      const user = userResult[0]
      const payload = { id: user.id, name: user.name, avatar: user.avatar }

      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 })

      ctx.status = 200
      ctx.body = {
        token: `Bearer ${token}`,  // 字符串前面必须是'Bearer '
        success: true
      }

    } else {
      ctx.status = 400
      ctx.body = {
        code: 0,
        message: '密码错误'
      }
    }
  }
})


/**
 * @desc 用户信息接口地址 返回用户信息
 * @access 接口是私密的
 */
router.get(
  '/get_user',
  passport.authenticate('jwt', { session: false }),
  async ctx => {
    ctx.body = {
      code: 1,
      data: ctx.state.user,   // state: passport.js 验证通过后done(null, user)的数据
      success: true
    }
  }
)


export default router.routes()
