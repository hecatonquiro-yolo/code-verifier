import { BasicResponse } from './types'
import { iHelloController } from './interfaces'
import { logSuccess } from '@/utils/logger'

export class HelloController implements iHelloController {
  public async getMessage (name?: string): Promise<BasicResponse> {
    logSuccess('[api/hello] Get Request')

    return {
      message: `Hello, ${name || 'world!'}`
    }
  }
}
