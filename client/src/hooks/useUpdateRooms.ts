import { useDispatch, useSelector } from 'react-redux'
import { RoomsState, setRooms } from '../store/rooms'
import { RootState } from '../store'

export default function useUpdateRooms() {
  const dispatch = useDispatch()
  const socket = useSelector((state: RootState) => state.socketIO.socket)

  socket?.on('update-room-list', (rooms: RoomsState) => {
    dispatch(setRooms(rooms))
  })
}
