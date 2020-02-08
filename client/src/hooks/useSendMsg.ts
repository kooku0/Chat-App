import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../store/messages'
import useName from './useName'

export default function useSendMsg(roomId: number) {
  const dispatch = useDispatch()

  const name = useName()
  const onAdd = useCallback((msg: string) => dispatch(addMessage(roomId, name, msg)), [
    dispatch,
    name,
  ])
  return onAdd
}
