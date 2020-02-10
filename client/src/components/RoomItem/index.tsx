import React from 'react'
import { Link } from 'react-router-dom'
import { Member } from 'src/store/rooms'

interface RoomItemProps {
  id: string
  members: Member[]
  active: Boolean
  status: Boolean
}

function RoomItem({ id, members, active, status }: RoomItemProps) {
  return (
    <Link to={`/chat/${id}`}>
      <li className={active ? 'active' : ''}>
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
              className="rounded-circle user_img"
            />
            <span className={`online_icon ${status ? '' : 'offline'}`} />
          </div>
          <div className="user_info">
            <span>{id.toString()}</span>
            <p>{`${members.length}명 참가중`}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RoomItem
