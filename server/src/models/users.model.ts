// 模型代表一个存取数据的对象。用来对应数据库中的一个表实体。
// 我们在业务层就可以直接通过操作该模型对象来操作数据库。
import mongoose, { Schema } from 'mongoose'

// 实例化模板数据
const UserSchema:Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
})

export default mongoose.model('user', UserSchema)
