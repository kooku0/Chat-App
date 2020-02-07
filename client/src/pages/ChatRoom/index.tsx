import React from 'react'
import ChatItem from '../../components/ChatItem'
import ChatHeader from '../../components/ChatHeader'
import ChatFooter from '../../components/ChatFooter'

import './style.scss'

function ChatRoom() {
  return (
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <ChatHeader />
        <div className="card-body msg_card_body">
          <ChatItem flag={true} />
          <ChatItem flag={false} />
          <ChatItem flag={true} />
          <ChatItem flag={false} />
          <ChatItem flag={true} />
          <ChatItem flag={false} />
          <ChatItem flag={true} />
          <ChatItem flag={false} />
        </div>
        <ChatFooter />
      </div>
    </div>
  )
}

export default ChatRoom
