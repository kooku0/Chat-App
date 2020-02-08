import { ADD_MESSAGE, DELETE_MESSAGE, REMOVE_ROOM_MSG } from './actions'
import { MessagesState, MessagesAction } from './types'

const initialState: MessagesState = [
  {
    roomId: 1,
    messages: [
      {
        id: 0,
        writer: '아무개',
        message: '안녕. 안녕',
        date: new Date(),
      },
      {
        id: 1,
        writer: '아무개1',
        message:
          ' 나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕나두 안녕',
        date: new Date(),
      },
      {
        id: 2,
        writer: '아무개2',
        message: '그래 안녕',
        date: new Date(),
      },
      {
        id: 3,
        writer: '아무개',
        message: '그래 안녕',
        date: new Date(),
      },
      {
        id: 4,
        writer: '아무개2',
        message: '그래 안녕',
        date: new Date(),
      },
    ],
  },
]

function messages(state: MessagesState = initialState, action: MessagesAction): MessagesState {
  switch (action.type) {
    case ADD_MESSAGE:
      const { roomId, writer, msg } = action.payload
      let roomIdx = state.findIndex(room => room.roomId === roomId)
      const messageList = state[roomIdx].messages
      const nextId = Math.max(...messageList.map(msg => msg.id)) + 1
      state[roomIdx].messages.push({
        id: nextId,
        writer: writer,
        message: msg,
        date: new Date(),
      })
      return [...state]
    case DELETE_MESSAGE:
      roomIdx = state.findIndex(room => room.roomId === action.payload.roomId)
      state[roomIdx].messages.filter(msg => msg.id !== action.payload.id)
      return [...state]
    case REMOVE_ROOM_MSG:
      return state.filter(room => room.roomId !== action.payload)
    default:
      return state
  }
}

export default messages
