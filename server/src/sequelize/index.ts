// 来进行数据库连接
import mongoose from 'mongoose'

import config from '../config/config'

const DBConnect:Function = () => {
  mongoose.connect(config.dataBase, config.dbOptions)
    .then(() => {
      console.log('mongodb connected~');
    })
    .catch(err => {
      console.log(err);
    })
}

export default DBConnect
