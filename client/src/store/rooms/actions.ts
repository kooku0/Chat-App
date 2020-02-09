import { RoomsState } from './types'

export const ADD_ROOM = 'rooms/ADD_ROOM' as const
export const REMOVE_ROOM = 'rooms/REMOVE_ROOM' as const
export const JOIN_ROOM = 'rooms/JOIN_ROOM' as const
export const SET_ROOMS = 'rooms/SET_ROOMS' as const

export const addRoom = (name: string) => ({
  type: ADD_ROOM,
  payload: name,
})
export const removeRoom = (roomId: string) => ({
  type: REMOVE_ROOM,
  payload: roomId,
})
export const joinRoom = (roomId: string, name: string) => ({
  type: JOIN_ROOM,
  payload: {
    roomId: roomId,
    name: name,
  },
})
export const setRooms = (rooms: RoomsState) => ({
  type: SET_ROOMS,
  payload: rooms,
})
