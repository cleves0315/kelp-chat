// 业务层用来编写业务代码，对控制层得到的http请求作出响应
import GroupModel from '../models/group.model'

export class GroupService {
  // 创建房间
  insertChatRoom({ targets, room_name }) {
    const newChatRoom = new GroupModel({
      targets,
      room_name,
    })

    return newChatRoom.save()
  }
  // 获取房间列表
  findChatRoom(user_id: string) {
    return GroupModel.find({ 'targets.user': user_id })
  }
}
