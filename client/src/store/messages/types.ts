import { addMessage, deleteMessage, removeRoomMsg } from './actions'

export type MessagesAction =
  | ReturnType<typeof addMessage>
  | ReturnType<typeof deleteMessage>
  | ReturnType<typeof removeRoomMsg>

export type Message = {
  id: string
  message: string
  writer: string
  date: Date
}
export type RoomMessages = {
  roomId: string
  messages: Message[]
}
export type MessagesState = RoomMessages[]
