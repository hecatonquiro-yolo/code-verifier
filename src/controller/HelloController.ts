import { Get, Query, Route, Tags } from 'tsoa'
import { BasicResponse } from './types'
import { iHelloController } from './interfaces'
import { logSuccess } from '../utils/logger'

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements iHelloController {
  /**
   * Endpoint to retreive a Message "Hello {name}" in JSON
   * @param {string | undefined} name Name of user to be greeted
   * @returns {BasicResponse} Promise of Basic Response
   */
  @Get('/')
  public async getMessage (@Query()name?: string): Promise<BasicResponse> {
    logSuccess('[api/hello] Get Request')

    return {
      message: `Hello, ${name || 'world!'}`
    }
  }
}
