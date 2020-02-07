import React from 'react'
import { Link } from 'react-router-dom'

interface RoomItemProps {
  id: Number
  active: Boolean
  status: Boolean
}

function RoomItem({ id, active, status }: RoomItemProps) {
  return (
    <Link to={`/chat/${id}`}>
      <li className={active ? 'active' : ''}>
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              className="rounded-circle user_img"
            />
            <span className={`online_icon ${status ? '' : 'offline'}`}></span>
          </div>
          <div className="user_info">
            <span>Khalid</span>
            <p>Kalid is online</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RoomItem
