import React from 'react'
import ChatItem from '../../components/ChatItem'
import ChatHeader from '../../components/ChatHeader'
import ChatFooter from '../../components/ChatFooter'
import useMessages from '../../hooks/useMessages'

import './style.scss'

function ChatRoom() {
  const messages = useMessages(1)
  return (
    <div className="col-md-8 col-xl-6 chat">
      <div className="card">
        <ChatHeader />
        <div className="card-body msg_card_body">
          {messages.map(({ id, writer, message, date }) => (
            <ChatItem key={id} writer={writer} message={message} date={date} />
          ))}
        </div>
        <ChatFooter />
      </div>
    </div>
  )
}

export default ChatRoom
