import { addRoom, removeRoom, joinRoom, setRooms } from './actions'

export type RoomsAction =
  | ReturnType<typeof addRoom>
  | ReturnType<typeof removeRoom>
  | ReturnType<typeof joinRoom>
  | ReturnType<typeof setRooms>

export type Room = {
  roomId: number
  members: string[]
}

export type RoomsState = Room[]
