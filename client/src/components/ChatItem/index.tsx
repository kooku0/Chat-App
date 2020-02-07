import React from 'react'

interface ChatItemProps {
  flag: Boolean
}

function ChatItem({ flag }: ChatItemProps) {
  return (
    <div className={`d-flex justify-content-${flag ? 'start' : 'end'} mb-4`}>
      {flag ? (
        <div className="img_cont_msg">
          <img
            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
            className="rounded-circle user_img_msg"
          />
        </div>
      ) : (
        ''
      )}
      <div className={`msg_cotainer${flag ? '' : '_send'}`}>
        Hi, how are you samim?
        <span className="msg_time">8:40 AM, Today</span>
      </div>
    </div>
  )
}

export default ChatItem
