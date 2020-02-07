import { addMessage, deleteMessage, removeRoomMsg } from './actions'

export type MessagesAction =
  | ReturnType<typeof addMessage>
  | ReturnType<typeof deleteMessage>
  | ReturnType<typeof removeRoomMsg>

export type Message = {
  id: number
  message: string
  writer: string
  date: Date
}
export type RoomMessages = {
  roomId: number
  messages: Message[]
}
export type MessagesState = RoomMessages[]
