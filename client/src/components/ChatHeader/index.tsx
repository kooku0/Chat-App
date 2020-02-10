import React from 'react'
import ChatMenu from '../ChatMenu'
import { Room } from '../../store/rooms'

import './style.scss'

interface ChatHeaderProps {
  roomInfo?: Room
}

function ChatHeader({ roomInfo }: ChatHeaderProps) {
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
          <span>{roomInfo?.roomId}</span>
          <p>{`${roomInfo?.members.length}명 참가중`}</p>
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
