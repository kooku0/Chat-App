import React, { useEffect } from 'react'
import useName from '../../hooks/useName'
import parseDateToString from '../../utils/parseDateToString'

import './style.scss'

interface ChatItemProps {
  writer: string
  message: string
  date: Date
}

function ChatItem(props: ChatItemProps) {
  useEffect(() => {}, [props])
  const { writer, message, date } = props
  const name = useName()
  return (
    <div className={`d-flex justify-content-${writer !== name ? 'start' : 'end'} mb-4`}>
      {writer !== name ? (
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
      ) : (
        ''
      )}
      {writer !== name ? (
        <div className="msg_writer">
          <span>{writer}</span>
        </div>
      ) : (
        ''
      )}
      <div className={`msg_box msg_cotainer${writer !== name ? '' : '_send'}`}>
        {message}
        <span className="msg_time">{parseDateToString(date)}</span>
      </div>
    </div>
  )
}

export default ChatItem
