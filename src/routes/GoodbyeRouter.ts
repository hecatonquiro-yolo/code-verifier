import express, { Request, Response } from 'express'
import { GoodbyeController } from '../controller/GoodbyeController'
import { logInfo } from '../utils/logger'

const goodbyeRouter = express.Router()

goodbyeRouter.route('/')
  .get(async (req: Request, res: Response) => {
    const name = req?.query?.name
    logInfo(`Query Params: ${name}`)

    const controller: GoodbyeController = new GoodbyeController()
    const response = await controller.getMessage(name)

    return res.send(response)
  })

export default goodbyeRouter
