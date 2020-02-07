export const ADD_ROOM = 'rooms/ADD_ROOM' as const
export const REMOVE_ROOM = 'rooms/REMOVE_ROOM' as const

export const addRoom = () => ({ type: ADD_ROOM })
export const removeRoom = (id: number) => ({
  type: REMOVE_ROOM,
  payload: id,
})
