export const ADD_MESSAGE = 'messages/ADD_MESSAGE' as const
export const DELETE_MESSAGE = 'messages/DELETE_MESSAGE' as const
export const REMOVE_ROOM_MSG = 'messages/REMOVE_ROOM_MSG' as const

export const addMessage = (
  roomId: string,
  msgId: string,
  writer: string,
  message: string,
  date: Date,
) => ({
  type: ADD_MESSAGE,
  payload: {
    roomId: roomId,
    msgId: msgId,
    writer: writer,
    message: message,
    date: date,
  },
})
export const deleteMessage = (roomId: string, msgId: string) => ({
  type: DELETE_MESSAGE,
  payload: {
    roomId: roomId,
    msgId: msgId,
  },
})
export const removeRoomMsg = (roomId: string) => ({
  type: REMOVE_ROOM_MSG,
  payload: roomId,
})
