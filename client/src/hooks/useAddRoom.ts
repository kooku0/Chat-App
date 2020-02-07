import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { addRoom } from '../store/rooms'

export default function useAddRoom() {
  const dispatch = useDispatch()
  return useCallback(name => dispatch(addRoom(name)), [dispatch])
}
