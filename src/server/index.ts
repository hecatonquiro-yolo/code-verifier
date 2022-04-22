import express, { Express, Request, Response } from 'express'

// Environment Variables
import dotenv from 'dotenv'

// Security

import cors from 'cors'
import helmet from 'helmet'

// TODO HTTPS

// Root Router

import rootRouter from '../routes/index'
import helloRouter from '../routes/HelloRouter'
import goodbyeRouter from '../routes/GoodbyeRouter'

// Config the .env files
dotenv.config()

// Create Express APP

const server: Express = express()

// Define SERVER to use /api and execute rootRouters from 'routes/index.ts'
// From this point onover: http://localhost/8000/api

server.use(
  '/api',
  rootRouter
)

server.use('/api/hello', helloRouter)

server.use('/api/goodbye', goodbyeRouter)

// TODO Mongoose Connection

// Security Config

server.use(helmet())
server.use(cors())

// Content Type Config:

server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// * Redirections
// http://localhost:8000/ -> http://localhost:8000/api

server.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default server
