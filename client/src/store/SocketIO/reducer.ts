import { CONNECT_SERVER } from './actions'
import { SocketIOState, socketIOAction } from './types'
import socketIOClient from 'socket.io-client'

const initialState: SocketIOState = {
  endPoint: '',
  socket: null,
}

function socketIO(state: SocketIOState = initialState, action: socketIOAction) {
  switch (action.type) {
    case CONNECT_SERVER:
      const socket = socketIOClient(action.payload)
      return {
        endPoint: action.payload,
        socket: socket,
      }
    default:
      return state
  }
}

export default socketIO
