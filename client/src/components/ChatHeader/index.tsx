import React from 'react'
import ChatMenu from '../ChatMenu'

import './style.scss'

function ChatHeader() {
  return (
    <div className="card-header msg_head">
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img"
          />
          <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <span>Chat with Khalid</span>
          <p>1767 Messages</p>
        </div>
      </div>
      <span id="action_menu_btn">
        <i className="fas fa-ellipsis-v"></i>
      </span>
      <ChatMenu />
    </div>
  )
}

export default ChatHeader
