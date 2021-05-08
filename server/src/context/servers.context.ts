import { GroupService } from '../services'

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
