import mongoose, { Schema } from 'mongoose'

const ChatSchema: Schema = new Schema({
  content_type: {
    // 聊天内容类型
    type: String,
    default: 'normal',
  },
  chat_room: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: 'user',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('chat', ChatSchema)
