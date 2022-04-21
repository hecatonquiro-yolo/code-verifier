import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
/* import {resolveSoa} from 'dns' */

//  Configuration .env files
dotenv.config()

//  Create Express APP

const app: Express = express()
const port = process.env.PORT || 8000

// Define the first app's route

// Define the second route of app
app.get('/hello/:name', (req: Request, res: Response) => {
  const paramName = req.params.name
  res.json({
    data: {
      message: `Hola, ${paramName}`
    }
  })
})

// Execute app and listen

app.listen(port, () => console.log(`EXPRESS SERVER: Running in http://localhost:${port}`))
