import { ADD_ROOM, REMOVE_ROOM, JOIN_ROOM, SET_ROOMS } from './actions'
import { RoomsState, RoomsAction } from './types'

const initialState: RoomsState = [
  { roomId: 1, members: ['jhon', 'mike'] },
  { roomId: 2, members: ['doosan'] },
]

function rooms(state: RoomsState = initialState, action: RoomsAction) {
  switch (action.type) {
    case ADD_ROOM:
      const nextId = Math.max(...state.map(room => room.roomId)) + 1
      return state.concat({
        roomId: nextId,
        members: [action.payload],
      })
    case REMOVE_ROOM:
      return state.filter(room => room.roomId !== action.payload)
    case JOIN_ROOM:
      return state.map(room =>
        room.roomId === action.payload.id
          ? { ...room, member: room.members.push(action.payload.name) }
          : room,
      )
    case SET_ROOMS:
      return [...action.payload]
    default:
      return state
  }
}

export default rooms
