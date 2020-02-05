import React from 'react'

function RoomItem({ active, status }: any) {
  return (
    <li className="active">
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img"
          />
          <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <span>Khalid</span>
          <p>Kalid is online</p>
        </div>
      </div>
    </li>
  )
}

export default RoomItem
