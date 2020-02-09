import React, { useEffect } from 'react'
import ChatHeader from '../../components/ChatHeader'
import ChatBody from '../../components/ChatBody'
import ChatFooter from '../../components/ChatFooter'
import useMessages from '../../hooks/useMessages'
import scrollToBottom from '../../utils/scrollToBottom'
import useRoomInfo from 'src/hooks/useRoomInfo'
import useSendMsg from 'src/hooks/useSendMsg'

import './style.scss'

function ChatRoom({ match }: any) {
  const roomId = match.params?.id
  const messages = useMessages(roomId) // roomId
  const roomInfo = useRoomInfo(roomId)
  const recieveMessage = useSendMsg(roomId).recieveMessage
  useEffect(() => {
    scrollToBottom('card-body')
    recieveMessage()
  }, [messages.length])

  return (
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <ChatHeader roomInfo={roomInfo} />
        <ChatBody messages={messages} />
        <ChatFooter roomId={roomId} />
      </div>
    </div>
  )
}

export default ChatRoom
