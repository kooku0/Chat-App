import * as path from 'path'
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'

import logger from './logger'

// Shutdown codes
const errShutdown = async (server: http.Server, err?: Error) => {
  logger.error(`Stopping server with error: ${err}`)
  await server.close()
  process.exit(1)
}

const graceShutdown = (signal: string) => {
  logger.info(`Stopping server with signal: ${signal}`)
  process.exit(0)
}

async function runServer() {
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use(express.static(path.join(__dirname, 'public')))

  const server = app.listen(5000, () => {
    logger.info('Server app listening on port 5000!')
  })
  try {
  } catch (e) {
    errShutdown(server, e)
    throw e
  }
}
runServer()
  .then(() => {
    logger.info('run succesfully')
  })
  .catch((ex: Error) => {
    logger.error('Unable run:', ex)
  })

// Graceful shutdown - SIGINT handling
process.on('SIGINT', () => graceShutdown('SIGINT'))
process.on('SIGTERM', () => graceShutdown('SIGTERM'))
