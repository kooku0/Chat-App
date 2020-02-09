import React from 'react'
import useInput from '../../hooks/useInput'

import './style.scss'

interface ChatFooterProps {
  sendMessage: (msg: string) => void
  addMsgToStore: (msg: string) => void
}

function ChatFooter({ sendMessage, addMsgToStore }: ChatFooterProps) {
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
