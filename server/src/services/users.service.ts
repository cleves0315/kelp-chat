import UsersModel from '../models/users.model'

export class UserService {
  // 查找用户
  findUsers(name: string) {
    return UsersModel.find({ name })
  }

  // 添加用户
  insertUsers(name: string, password: string) {
    return new UsersModel({ name, password }).save()
  }
}