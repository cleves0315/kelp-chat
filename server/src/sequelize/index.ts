// 来进行数据库连接
import mongoose from 'mongoose'

import config from '../config/config'

const DBConnect: Function = () => {
  return mongoose.connect(config.dataBase, config.dbOptions)
}

export default DBConnect
