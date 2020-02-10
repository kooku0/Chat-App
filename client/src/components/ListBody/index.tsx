import React, { useEffect } from 'react'
import RoomItem from 'src/components/RoomItem'
import useRooms from '../../hooks/useRooms'
import useName from 'src/hooks/useName'

interface ListBodyProps {
  filterRoomId: string
  joinedRoomFlag: Boolean
  onClick: (roomId: string) => void
}

function ListBody({ filterRoomId, joinedRoomFlag, onClick }: ListBodyProps) {
  const rooms = useRooms()
  const name = useName()
  useEffect(() => {}, [rooms, joinedRoomFlag])
  return (
    <div className="card-body contacts_body">
      <div className="contacts">
        {rooms
          .filter(room => room.roomId.includes(filterRoomId))
          .filter(room =>
            joinedRoomFlag ? room.members.find(member => member.name === name) : true,
          )
          .map(room => (
            <div key={room.roomId} onClick={() => onClick(room.roomId)}>
              <RoomItem id={room.roomId} members={room.members} active={false} status={false} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ListBody
