import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ChatHeader from '../../components/ChatHeader'
import ChatBody from '../../components/ChatBody'
import ChatFooter from '../../components/ChatFooter'
import useMessages from '../../hooks/useMessages'
import useRoomInfo from 'src/hooks/useRoomInfo'
import useSendMsg from 'src/hooks/useSendMsg'

import './style.scss'

function ChatRoom({ match }: RouteComponentProps<{ id: string }>) {
  const roomId = match.params?.id
  const messages = useMessages(roomId)
  const roomInfo = useRoomInfo(roomId)
  const { recieveMessage, sendMessage, addMsgToStore, socketOff } = useSendMsg(roomId)
  useEffect(() => {
    recieveMessage()
    return function cleanup() {
      socketOff()
    }
  }, [])
  return (
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <ChatHeader roomInfo={roomInfo} />
        <ChatBody messages={messages} />
        <ChatFooter sendMessage={sendMessage} addMsgToStore={addMsgToStore} />
      </div>
    </div>
  )
}

export default ChatRoom
