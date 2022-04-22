import express, { Request, Response } from 'express'
import helloRouter from './HelloRouter'
import { logInfo } from '../utils/logger'

// Server Instance

const server = express()

const rootRouter = express.Router()

// Activate for request to http://localhost:8000/api

rootRouter.get('/', (req: Request, res: Response) => {
  // Send Json!
  logInfo('Get http://localhost:8000/api')
  res.json({
    data: {
      message: 'Goodbay, world'
    }
  })
})

// Redirections to Routers & Controllers

server.use('/', rootRouter) // http://localhost:8000/api/
server.use('/hello', helloRouter) // http://localhost:8000/api/hello

// Add more routes

export default rootRouter
