import { connectServer } from './actions'

export type socketIOAction = ReturnType<typeof connectServer>

export type SocketIOState = {
  endPoint: string
  socket: SocketIOClient.Socket | null
}
