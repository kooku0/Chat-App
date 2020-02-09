import React, { useState, ChangeEvent, KeyboardEvent, useCallback } from 'react'
import ListHeader from '../../components/ListHeader'
import RoomItem from '../../components/RoomItem'
import useRooms from '../../hooks/useRooms'
import useUpdateRooms from '../../hooks/useUpdateRooms'
import useEnterRoom from 'src/hooks/useEnterRoom'

import './style.scss'

function RoomList() {
  const rooms = useRooms()
  const onEnterRoom = useEnterRoom()
  useUpdateRooms()
  const [value, setValue] = useState('')
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }
  const handleKeyDown = ({ keyCode }: KeyboardEvent) => {
    if (keyCode === 13 && value !== '') {
      onEnterRoom(value)
      setValue('')
    }
  }
  const handleClick = useCallback((roomId: string) => onEnterRoom(roomId), [])
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <ListHeader roomName={value} onChange={handleChange} onKeyDown={handleKeyDown} />
        <div className="card-body contacts_body">
          <div className="contacts">
            {rooms
              .filter(room => room.roomId.includes(value))
              .map(room => (
                <div key={room.roomId} onClick={() => handleClick(room.roomId)}>
                  <RoomItem id={room.roomId} members={room.members} active={false} status={false} />
                </div>
              ))}
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default RoomList
