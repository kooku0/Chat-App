import React from 'react'
import RoomItem from '../../components/RoomItem'

import './style.scss'

function RoomList() {
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <div className="input-group">
            <input type="text" placeholder="Search..." name="" className="form-control search" />
            <div className="input-group-prepend">
              <span className="input-group-text search_btn">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="card-body contacts_body">
          <div className="contacts">
            <RoomItem active={true} status={true} />
            <RoomItem active={false} status={false} />
            <RoomItem active={false} status={true} />
            <RoomItem active={false} status={false} />
            <RoomItem active={false} status={false} />
            <RoomItem active={false} status={false} />
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  )
}

export default RoomList
