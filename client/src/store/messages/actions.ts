export const ADD_MESSAGE = 'messages/ADD_MESSAGE' as const
export const DELETE_MESSAGE = 'messages/DELETE_MESSAGE' as const
export const REMOVE_ROOM_MSG = 'messages/REMOVE_ROOM_MSG' as const

export const addMessage = (roomId: number, writer: string, msg: string) => ({
  type: ADD_MESSAGE,
  payload: {
    roomId: roomId,
    writer: writer,
    msg: msg,
  },
})
export const deleteMessage = (roomId: number, id: number) => ({
  type: DELETE_MESSAGE,
  payload: {
    roomId: roomId,
    id: id,
  },
})
export const removeRoomMsg = (roomId: number) => ({
  type: REMOVE_ROOM_MSG,
  payload: roomId,
})
