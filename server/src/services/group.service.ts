// 业务层用来编写业务代码，对控制层得到的http请求作出响应
import GroupModel from '../models/group.model'

export class GroupService {
  // 创建房间
  insertGroup({ targets, room_name }) {
    const newChatRoom = new GroupModel({
      targets,
      room_name,
    })

    return newChatRoom.save()
  }

  // 获取用户的所有房间列表
  findGroup(user_id: string) {
    return GroupModel.find({ 'targets.user': user_id })
  }

  // 查看是否在该房间
  findGroupUsers(user_id: string, room_id: string) {
    return GroupModel.find({
      _id: room_id,
      targets: {
        $elemMatch: {
          user: user_id
        }
      }
    })
  }

  // 加入聊天房
  joinGroup(user_id: string, room_id: string) {
    return GroupModel.findOneAndUpdate(
      { _id: room_id },
      {
        $push: {
          targets: { user: user_id }
        }
      },
      { new: true }
    )
  }

  // 退出聊天房
  exitGroup(user_id: string, room_id: string) {
    return GroupModel.findOneAndUpdate(
      { _id: room_id },
      {
        $pull: {
          targets: { user: user_id },
        },
      }
    )
  }
}
