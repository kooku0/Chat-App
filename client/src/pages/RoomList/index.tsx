import React, { useState, ChangeEvent, KeyboardEvent, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ListHeader from '../../components/ListHeader'
import ListBody from '../../components/ListBody'
import useUpdateRooms from '../../hooks/useUpdateRooms'
import useEnterRoom from 'src/hooks/useEnterRoom'

import './style.scss'

function RoomList({ history }: RouteComponentProps) {
  const [value, setValue] = useState('')
  const [checkValue, toggleCheck] = useState(false)
  const onEnterRoom = useEnterRoom()
  useUpdateRooms()
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }
  const handleKeyDown = ({ keyCode }: KeyboardEvent) => {
    if (keyCode === 13 && value !== '') {
      onEnterRoom(value)
      history.push(`/chat/${value}`)
      setValue('')
    }
  }
  const handleCheckBox = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    toggleCheck(target.checked)
  }, [])
  const handleClick = useCallback((roomId: string) => onEnterRoom(roomId), [])
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <ListHeader
          roomName={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          // checked={checkValue}
          toggleCheck={handleCheckBox}
        />
        <ListBody filterRoomId={value} onClick={handleClick} joinedRoomFlag={checkValue} />
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default RoomList
