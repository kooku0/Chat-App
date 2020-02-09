import React from 'react'
import ChatItem from '../../components/ChatItem'
import { Message } from 'src/store/messages'

interface ChatBodyProps {
  messages: Message[]
}

function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className="card-body msg_card_body">
      {messages.map(({ id, writer, message, date }) => (
        <ChatItem key={id} writer={writer} message={message} date={date} />
      ))}
    </div>
  )
}

export default ChatBody
