import { useSelector } from 'react-redux'
import { RootState } from '../store'

import { Room } from '../store/rooms'

export default function useRooms(): Room[] {
  const rooms = useSelector((state: RootState) => state.rooms)
  return rooms
}
