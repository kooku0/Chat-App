import React from 'react'

import ListHeader from '../../components/ListHeader'
import RoomItem from '../../components/RoomItem'
import useRooms from '../../hooks/useRooms'

import './style.scss'

function RoomList() {
  const rooms = useRooms()

  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <ListHeader />
        <div className="card-body contacts_body">
          <div className="contacts">
            {rooms.map(room => (
              <RoomItem key={room.id} active={false} status={false} />
            ))}
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default RoomList
