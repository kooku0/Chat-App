import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { joinRoom, removeRoom } from '../store/rooms'

export default function useTodoActions(id: number, name: string) {
  const dispatch = useDispatch()

  const onJoin = useCallback(() => dispatch(joinRoom(id, name)), [dispatch, id, name])
  const onRemove = useCallback(() => dispatch(removeRoom(id)), [dispatch, id])

  return { onJoin, onRemove }
}
