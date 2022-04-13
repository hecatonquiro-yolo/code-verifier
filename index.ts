import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv'
import { resolveSoa } from "dns";

//Configuration .env files
dotenv.config()

//Create Express APP

const app: Express = express()
const port = process.env.PORT || 8000

// Define the first app's route 
app.get('/', (req: Request, res: Response) => {
    //Send Hello World!
    res.send('APP Express + TS + JS + Node')
})

//Define the second route of app
app.get('/hola', (req: Request, res: Response)=> {
    res.send('Hola, a la rta Hola!')
})


// Execute app and listen

app.listen(port, () => console.log(`EXPRESS SERVER: Running in http://localhost:${port}`))