import React from 'react'
import useSendMsg from '../../hooks/useSendMsg'
import useInput from '../../hooks/useInput'

import './style.scss'

interface ChatFooterProps {
  roomId: string
}

function ChatFooter({ roomId }: ChatFooterProps) {
  const { sendMessage, addMsgToStore } = useSendMsg(roomId)
  const inputActions = useInput('', [addMsgToStore, sendMessage])
  return (
    <div className="card-footer">
      <div className="input-group">
        <div className="input-group-append">
          <span className="input-group-text attach_btn">
            <i className="fas fa-paperclip"></i>
          </span>
        </div>
        <input
          className="form-control type_msg"
          placeholder="Type your message..."
          {...inputActions}
        />
        <div className="input-group-append">
          <span className="input-group-text send_btn">
            <i className="fas fa-location-arrow"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChatFooter
