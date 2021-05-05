const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 实例化模板数据
const UserSchema = new Schema({
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
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = user = mongoose.model('user', UserSchema)
