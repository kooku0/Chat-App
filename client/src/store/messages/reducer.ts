import { ADD_MESSAGE, DELETE_MESSAGE, REMOVE_ROOM_MSG } from './actions'
import { MessagesState, MessagesAction } from './types'

const initialState: MessagesState = []

function messages(state: MessagesState = initialState, action: MessagesAction): MessagesState {
  switch (action.type) {
    case ADD_MESSAGE:
      let { roomId } = action.payload
      let roomIdx = state.findIndex(room => room.roomId === roomId)
      delete action.payload['roomId']
      if (roomIdx === -1) {
        state.push({
          roomId: roomId,
          messages: [action.payload],
        })
      } else {
        state[roomIdx].messages.push(action.payload)
      }
      return [...state]
    case DELETE_MESSAGE:
      roomIdx = state.findIndex(room => room.roomId === action.payload.roomId)
      state[roomIdx].messages.filter(msg => msg.msgId !== action.payload.msgId)
      return [...state]
    case REMOVE_ROOM_MSG:
      return state.filter(room => room.roomId !== action.payload)
    default:
      return state
  }
}

export default messages
