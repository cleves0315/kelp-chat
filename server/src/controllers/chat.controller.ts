import Router from 'koa-router'
import passport from 'koa-passport'
import ChatRoomModel from '../models/chatRoom.model'
import chatRoomModel from '../models/chatRoom.model'

const router: Router = new Router()
/**
 * @desc 创建聊天房间
 * @access 接口私密
 * @param {string} users 用户id列表
 */
router.post('/', passport.authenticate('jwt', { session: true }), async (ctx) => {
  const { users, name } = ctx.request.body
  const { id } = ctx.state.user

  const userList = users.split(',').map((item) => ({ user: item }))
  if (userList.length) {
    const newChatRoom = new ChatRoomModel({
      targets: [{ user: id }, ...userList],
      name,
    })

    await newChatRoom
      .save()
      .then((chat_room) => {
        ctx.status = 200
        ctx.body = {
          code: 1,
          message: '房间添加成功',
          chat_room,
        }
      })
      .catch((err) => {
        console.log(err)
        ctx.status = 400
        ctx.body = {
          code: 0,
          chat_room: '添加失败',
        }
      })
  } else {
    ctx.status = 400
    ctx.body = {
      users: '用户列表为空',
    }
  }
})

/**
 * @desc 加入聊天房间
 * @access 接口私密
 */
router.post('/join', passport.authenticate('jwt', { session: true }), async (ctx) => {
  const { room_id } = ctx.request.body
  const { id } = ctx.state.user

  const findUserRoom = await chatRoomModel.find({
    _id: room_id,
    targets: {
      $elemMatch: {
        user: id
      }
    }
  })

  if (!findUserRoom.length) {
    await chatRoomModel.findOneAndUpdate(
      { _id: room_id },
      {
        $push: {
          targets: {
            user: id
          }
        }
      },
      { new: true }
    )

    ctx.status = 200
    ctx.body = {
      code: 1,
      message: '加入房间成功'
    }
  } else {
    ctx.status = 400
    ctx.body = {
      code: 0,
      message: '您已经在该房间列表'
    }
  }
})

/**
 * @desc 退出房间
 * @access 接口私密
 */
router.post('/exit', passport.authenticate('jwt', { session: false }), async ctx => {
  
})

export default router.routes()
