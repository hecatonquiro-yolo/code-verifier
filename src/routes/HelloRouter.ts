import express, { Request, Response } from 'express'
import { HelloController } from '@/controller/HelloController'
import { logInfo } from '@/utils/logger'

// Router from express

const helloRouter = express.Router()

// GET -> http://localhost:8000/api/hello/
helloRouter.route('/')
  .get(async (req: Request, res: Response) => {
    // Obtain a query param
    const name: any = req?.query?.name
    logInfo(`Query Params: ${name}`)

    // Controller instance to execute method
    const controller: HelloController = new HelloController()

    // Obtain Response

    const response = await controller.getMessage(name)

    // Send to the client the response

    return res.send(response)
  })

export default helloRouter
