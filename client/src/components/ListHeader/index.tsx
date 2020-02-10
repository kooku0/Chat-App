import React, { ChangeEvent } from 'react'

import './style.scss'

interface ListHeaderProps {
  roomName: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  // checked: boolean
  toggleCheck: (event: ChangeEvent<HTMLInputElement>) => void
}

function ListHeader({ roomName, onChange, onKeyDown, toggleCheck }: ListHeaderProps) {
  return (
    <div className="card-header">
      <div className="input-group">
        <input
          type="text"
          placeholder="채팅방 추가 및 참여"
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
      <span>
        <input type="checkbox" onChange={toggleCheck} />
        <i>참여 중인 방만 보기</i>
      </span>
    </div>
  )
}

export default ListHeader
