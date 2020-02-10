import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { joinRoom, removeRoom } from '../store/rooms'

export default function useRoomActions(roomId: string, socketId: string, name: string) {
  const dispatch = useDispatch()

  const onJoin = useCallback(() => dispatch(joinRoom(roomId, socketId, name)), [
    dispatch,
    roomId,
    name,
  ])
  const onRemove = useCallback(() => dispatch(removeRoom(roomId)), [dispatch, roomId])

  return { onJoin, onRemove }
}
