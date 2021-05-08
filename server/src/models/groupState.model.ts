import mongoose, { Schema } from 'mongoose'

const RoomStateSchema: Schema = new Schema({
  room: {
    type: String,
    ref: 'chat_room',
    required: true,
  },
  user: {
    type: String,
    ref: 'user',
    required: true,
  },
  unread_state: {
    // 未读消息状态
    num: {
      // 未读数量
      type: Number,
      default: 0,
    },
  },
})

export default mongoose.model('room_state', RoomStateSchema)
