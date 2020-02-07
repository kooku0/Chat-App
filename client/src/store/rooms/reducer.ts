import { ADD_ROOM, REMOVE_ROOM, JOIN_ROOM } from './actions'
import { RoomsState, RoomsAction } from './types'

const initialState: RoomsState = [
  { id: 1, members: ['jhon', 'mike'] },
  { id: 2, members: ['doosan'] },
]

function rooms(state: RoomsState = initialState, action: RoomsAction) {
  switch (action.type) {
    case ADD_ROOM:
      const nextId = Math.max(...state.map(room => room.id)) + 1
      return state.concat({
        id: nextId,
        members: [action.payload],
      })
    case REMOVE_ROOM:
      return state.filter(room => room.id !== action.payload)
    case JOIN_ROOM:
      return state.map(room =>
        room.id === action.payload.id
          ? { ...room, member: room.members.push(action.payload.name) }
          : room,
      )
    default:
      return state
  }
}

export default rooms
