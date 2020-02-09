import React, { ChangeEvent } from 'react'

import './style.scss'

interface ListHeaderProps {
  roomName: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

function ListHeader({ roomName, onChange, onKeyDown }: ListHeaderProps) {
  return (
    <div className="card-header">
      <div className="input-group">
        <input
          type="text"
          placeholder="채팅방 추가(채팅방 이름)"
          name=""
          className="form-control search"
          value={roomName}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <div className="input-group-prepend">
          <span className="input-group-text search_btn">
            {/* <i className="fas fa-search"></i> */}
            <i className="fas fa-plus"></i>
          </span>
        </div>
      </div>
      {/* <span className="add_btn">
        <i className="fas fa-plus" onClick={}>채팅방 추가</i>
      </span> */}
    </div>
  )
}

export default ListHeader
