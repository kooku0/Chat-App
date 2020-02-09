import { useDispatch, useSelector } from 'react-redux'
import { RoomsState, setRooms } from 'src/store/rooms'
import { RootState } from 'src/store'

export default function useUpdateRooms() {
  const dispatch = useDispatch()
  const socket = useSelector((state: RootState) => state.socketIO.socket)

  socket?.on('update-room-list', (rooms: RoomsState) => {
    dispatch(setRooms(rooms))
  })
}
