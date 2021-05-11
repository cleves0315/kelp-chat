import { GroupService, UserService } from '../services'

export class ServersContext {
  static setGroupService(arg0: GroupService) {
    throw new Error('Method not implemented.')
  }
  static instance: ServersContext

  static getInstance(): ServersContext {
    if (!ServersContext.instance) {
      ServersContext.instance = new ServersContext()
    }
    return ServersContext.instance
  }

  // user
  private _userService: UserService
  public get userService(): UserService {
    return this._userService
  }
  public setUserService(service: UserService): ServersContext {
    this._userService = service
    return this
  }

  // group
  private _groupService: GroupService
  public get groupService(): GroupService {
    return this._groupService
  }
  public setGroupService(service: GroupService): ServersContext {
    this._groupService = service
    return this
  }
}
