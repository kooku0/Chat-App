import { addRoom, removeRoom, joinRoom } from './actions'

export type RoomsAction =
  | ReturnType<typeof addRoom>
  | ReturnType<typeof removeRoom>
  | ReturnType<typeof joinRoom>

export type Room = {
  id: number
  members: string[]
}

export type RoomsState = Room[]
