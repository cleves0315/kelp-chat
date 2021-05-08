import mongoose, { Schema } from 'mongoose'

const ChatRoomSchema: Schema = new Schema({
  targets: [
    {
      user: {
        type: String,
        ref: 'user',
        required: true,
      },
    },
  ],
  name: {
    // 房间名
    type: String,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
  updata_date: {
    type: Date,
    default: true,
  },
})

export default mongoose.model('char_room', ChatRoomSchema)
