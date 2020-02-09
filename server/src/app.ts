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
    console.log(`connected: ${socket.id}`)
    socket.on('login', async (name: string, fn: any) => {
      socket.id = name
      fn(getActiveRooms())
    })
    socket.on('enter-room', (roomId: string) => {
      socket.join(roomId)
      io.emit('update-room-list', getActiveRooms())
    })
    socket.on('send:message', (message: Message) => {
      console.log(message)
      io.sockets.in(message.roomId).emit('send:message', message)
    })
    socket.on('disconnect', () => {
      console.log(`${socket.name} 님이 퇴장하셨습니다`)
    })
    function getActiveRooms() {
      const activeRooms = new Array()
      Object.keys(io.sockets.adapter.rooms).forEach(room => {
        let isRoom = true
        Object.keys(io.sockets.adapter.sids).forEach(id => {
          isRoom = id === room ? false : isRoom
        })
        if (isRoom)
          activeRooms.push({
            roomId: room,
            members: Object.keys(io.sockets.adapter.rooms[room].sockets),
          })
      })
      console.log(activeRooms)
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
