import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function useEnterRoom(): (roomNumber: string) => void {
  const socket = useSelector((state: RootState) => state.socketIO.socket)
  const onEnterRoom = (roomName: string) => {
    socket?.emit('enter-room', roomName)
  }
  return onEnterRoom
}
