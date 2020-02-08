import * as path from 'path'
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'
import * as socketIO from 'socket.io'
import { generate } from 'randomstring'
import { User, Room } from './types'
// import chatRouter from './routes/chat'

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
  const server = http.createServer(app)
  const io: SocketIO.Server = socketIO(server)
  // app.use(express.static(path.join(__dirname, 'public')))
  // app.use('/api/signin', chatRouter)
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, 'public/index.html'))
  // })
  app.set('socketio', io)
  // app.get('*', (req, res) => res.send('hello'))
  const rooms: Room[] = new Array()
  const users: User[] = new Array()
  io.sockets.on('connection', (socket: any) => {
    console.log(`connected: ${socket.id}`)
    socket.on('login', (name: string, fn: any) => {
      console.log(`${socket.id} : ${name}`)
      socket.name = name
      rooms.push({
        roomId: generate(),
        members: [name],
      })
      users.push({
        socketId: socket.id,
        state: 'on-line',
        user: name,
      })
      socket.broadcast.emit('update-user', users)
      fn(rooms)
    })
    socket.on('disconnect', () => {
      users.map(user => (user.socketId === socket.id ? { ...user, state: 'off-line' } : user))
    })
  })

  const expressServer = server.listen(5000, () => {
    logger.info('Server app listening on port 5000!')
  })
  try {
  } catch (e) {
    errShutdown(expressServer, e)
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
