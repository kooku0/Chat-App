import React, { useEffect } from 'react'
import ChatItem from '../../components/ChatItem'
import { Message } from 'src/store/messages'
import scrollToBottom from '../../utils/scrollToBottom'

interface ChatBodyProps {
  messages: Message[]
}

function ChatBody({ messages }: ChatBodyProps) {
  useEffect(() => {
    scrollToBottom('card-body')
  }, [messages.length])
  return (
    <div className="card-body msg_card_body">
      {messages.map(({ msgId, writer, message, date }) => (
        <ChatItem key={msgId} writer={writer} message={message} date={date} />
      ))}
    </div>
  )
}

export default ChatBody
