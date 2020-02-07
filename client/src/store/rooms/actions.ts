export const ADD_ROOM = 'rooms/ADD_ROOM' as const
export const REMOVE_ROOM = 'rooms/REMOVE_ROOM' as const
export const JOIN_ROOM = 'rooms/JOIN_ROOM' as const

export const addRoom = (name: string) => ({
  type: ADD_ROOM,
  payload: name,
})
export const removeRoom = (id: number) => ({
  type: REMOVE_ROOM,
  payload: id,
})
export const joinRoom = (id: number, name: string) => ({
  type: JOIN_ROOM,
  payload: {
    id: id,
    name: name,
  },
})
