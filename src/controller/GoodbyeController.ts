import { GoodbyeResponse } from './types'
import { iGoodbyeController } from './interfaces'
import { logSuccess } from '../utils/logger'

export class GoodbyeController implements iGoodbyeController {
  public async getMessage (name?: string): Promise<GoodbyeResponse> {
    logSuccess('[api/goodbye] Get Request')
    return {
      message: `Goodbye, ${name || 'world!'}`,
      date: `${Date()}`
    }
  }
}
