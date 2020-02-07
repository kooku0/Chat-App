import { useSelector } from 'react-redux'
import { RootState } from '../store'

import { Message } from '../store/messages'

export default function useMessages(roomId: Number): Message[] {
  const messages = useSelector((state: RootState) => state.messages).find(
    room => room.roomId === roomId,
  )
  if (messages === undefined) return []
  else return messages.messages
}
