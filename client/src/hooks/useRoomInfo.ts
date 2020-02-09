import { useSelector } from 'react-redux'
import { RootState } from '../store'

import { Room } from '../store/rooms'

export default function useRoomInfo(roomId: string): Room | undefined {
  const roomInfo = useSelector((state: RootState) => state.rooms).find(
    room => room.roomId === roomId,
  )
  return roomInfo
}
