import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function useEnterRoom() {
  const socket = useSelector((state: RootState) => state.socketIO.socket)
  const onJoinRoom = (roomName: string) => {
    socket?.emit('enter-room', roomName)
  }
  const onLeaveRoom = () => {
    socket?.off('rcv:message')
  }
  return {
    onJoinRoom,
    onLeaveRoom,
  }
}
