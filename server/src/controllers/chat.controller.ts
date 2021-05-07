import Router from 'koa-router'
import passport from 'passport-jwt'

const router: Router = new Router()
/**
 * @desc 添加聊天房间
 * @access 接口私密
 */
router.post('/', passport.authenticate('jwt', { session: true }), async (ctx) => {
  const body = ctx.request.body
})
export default router.routes()
