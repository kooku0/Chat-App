import * as express from 'express'

const router = express.Router()

router.get('*', (req, res) => {
  console.log('일단 들옴')
  // const io: SocketIO.Server = req.app.get('socketio')
  // io.on('connection', socket => {
  //   console.log('connected')
  //   socket.on('message', message => {
  //     io.emit('message', JSON.stringify(message))
  //   })
  // })
})

export default router
