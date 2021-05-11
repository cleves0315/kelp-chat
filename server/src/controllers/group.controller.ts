import Router from 'koa-router'
import passport from 'koa-passport'
import RoomStateModel from '../models/groupState.model'
import { ServersContext } from '../context'

const router: Router = new Router()
/**
 * @desc 创建聊天房间
 * @access 接口私密
 * @param {string} users 用户id列表
 * @param {string} room_name 房间名
 */
router.post('/', passport.authenticate('jwt', { session: false }), async (ctx) => {
  const { users, room_name } = ctx.request.body
  const { id } = ctx.state.user

  const userList = users.split(',').map((item) => ({ user: item }))
  if (userList.length) {
    const targets = [
      { user: id },
      ...userList
    ]
    const { groupService } = ServersContext.getInstance()
    await groupService.insertGroup({ targets, room_name })
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
 * @desc 获取用户所在房间列表
 * @access 接口私密
 */
router.get('/', passport.authenticate('jwt', { session: false }), async ctx => {
  const { id } = ctx.state.user
  const { groupService } = ServersContext.getInstance()
  const resultChatRoom = await groupService.findGroup(id)

  if (resultChatRoom.length) {
    ctx.status = 200
    ctx.body = {
      code: 1,
      message: '查询成功',
      room_list: resultChatRoom
    }
  } else {
    ctx.status = 400
    ctx.body = {
      code: 0,
      message: '暂无房间列表'
    }
  }
})

/**
 * @desc 加入聊天房间
 * @access 接口私密
 */
router.post('/join', passport.authenticate('jwt', { session: false }), async (ctx) => {
  const { id } = ctx.state.user
  const { room_id } = ctx.request.body
  const { groupService } = ServersContext.getInstance()

  const findUserRoom = await groupService.findGroupUsers(id, room_id)

  if (!findUserRoom.length) {
    groupService.joinGroup(id, room_id)

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
 * @param room_id
 */
router.post('/exit', passport.authenticate('jwt', { session: false }), async ctx => {
  const { room_id } = ctx.request.body
  const { id } = ctx.state

  const { groupService } = ServersContext.getInstance()

  groupService.exitGroup(id, room_id)
    .then(() => {
      ctx.state = 200
      ctx.body = {
        code: 1,
        message: '退出成功'
      }
    })
    .catch(() => {
      ctx.state = 400
      ctx.body = {
        code: 0,
        message: '操作失败'
      }
    })
})

/**
 * @desc 设置房间状态
 * @access 接口私密
 * @param room_id
 * @param state 要更改的状态
 * @param {string} options 要更改操作和值{action、value}
 */
router.post('/state', passport.authenticate('jwt', { session: false }), async ctx => {
  const { room_id, state, options } = ctx.request.body
  const { id } = ctx.state

  if (state === 'unread_state') {
    if (options.action === 'add') {
      // 增加一条未读消息
      await RoomStateModel.findOneAndUpdate(
        { room: room_id, user: id },
        {
          $inc: { 'unread_state.num': 1 }
        }
      )
    } else if (options.action === 'clear') {
      // 清空未读消息
      await RoomStateModel.findOneAndUpdate(
        { room: room_id, user: id },
        {
          $set: { 'unread_state.num': 0 }
        }
      )
    }
  }
})

export default router.routes()
