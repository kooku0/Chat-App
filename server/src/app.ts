import * as path from 'path'
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'
import * as socketIO from 'socket.io'
import { generate } from 'randomstring'
import { User, Room, Message } from './types'
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
const users = new Map()
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

  io.sockets.on('connection', (socket: any) => {
    logger.info(`connected: ${socket.id}`)
    socket.on('login', async (name: string, fn: any) => {
      users.set(socket.id, name)
      fn(getActiveRooms())
    })
    socket.on('enter-room', (roomId: string) => {
      logger.info(`enter: ${roomId} <= ${socket.id}`)
      socket.join(roomId)
      io.emit('update-room-list', getActiveRooms())
    })
    socket.on('send:message', (message: Message) => {
      logger.info(`message(send): ${message}`)
      io.sockets.in(message.roomId).emit('rcv:message', message)
    })
    socket.on('disconnect', () => {
      users.delete(socket.id)
      logger.info(`disconnected: ${socket.id}`)
    })
    function getActiveRooms() {
      const activeRooms = new Array()
      Object.keys(io.sockets.adapter.rooms).forEach(room => {
        let isRoom = true
        Object.keys(io.sockets.adapter.sids).forEach(id => {
          isRoom = id === room ? false : isRoom
        })
        if (isRoom) {
          const members = new Array()
          const roomIds = Object.keys(io.sockets.adapter.rooms[room].sockets)
          for (let socketId of roomIds) {
            members.push({
              socketId: socketId,
              name: users.get(socketId),
            })
          }
          activeRooms.push({
            roomId: room,
            members: members,
          })
        }
      })
      return activeRooms
    }
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
