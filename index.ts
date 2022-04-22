import dotenv from 'dotenv'
import server from './src/server'
import { logSuccess, logError } from './src/utils/logger'
/* import {resolveSoa} from 'dns' */

// * Configuration .env files
dotenv.config()

const port = process.env.PORT || 8000

// Execute app and listen

server.listen(port, () => {
  logSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

server.on('error', (error) => {
  logError(`[ERROR]:  ${error}`)
})
