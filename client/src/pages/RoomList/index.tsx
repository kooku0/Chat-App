import React, { useState, useCallback, ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ListHeader from '../../components/ListHeader'
import ListBody from '../../components/ListBody'
import useUpdateRooms from '../../hooks/useUpdateRooms'
import useRoomActions from '../../hooks/useRoomActions'
import useInput from '../../hooks/useInput'

import './style.scss'

function RoomList({ history }: RouteComponentProps) {

  const [checkValue, toggleCheck] = useState(false)
  const { onJoinRoom } = useRoomActions()
  useUpdateRooms()
  const callBackFunc = (roomId: string) => {
    onJoinRoom(roomId)
    history.push(`/chat/${roomId}`)
  }
  const { value: roomId, onChange, onKeyDown } = useInput('', [callBackFunc])

  const handleCheckBox = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    toggleCheck(target.checked)
  }, [])
  const handleClick = useCallback((roomId: string) => onJoinRoom(roomId), [])
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <ListHeader
          roomId={roomId}
          onChange={onChange}
          onKeyDown={onKeyDown}
          // checked={checkValue}
          toggleCheck={handleCheckBox}
        />
        <ListBody filterRoomId={roomId} onClick={handleClick} joinedRoomFlag={checkValue} />
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default RoomList
