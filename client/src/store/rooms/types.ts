import { addRoom, removeRoom, joinRoom, setRooms } from './actions'

export type RoomsAction =
  | ReturnType<typeof addRoom>
  | ReturnType<typeof removeRoom>
  | ReturnType<typeof joinRoom>
  | ReturnType<typeof setRooms>

export type Member = {
  socketId: string
  name: string
}
export type Room = {
  roomId: string
  members: Member[]
}

export type RoomsState = Room[]
