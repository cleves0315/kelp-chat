import React from 'react'
import Avatar from '../Avatar'

import './styles.scss'

export default function ChatMsgCard() {
  return (
    <div className="chat-msg-card">
      <Avatar width="40px" height="40px" />
      <div className="message-wrapper">
        <div className="info">LiHeng</div>
        <div className="msg">
          <div className="text">
            hellohellohellohellohelloh ellohellohellohellohellohellohelloh
            ellohellohellohellohellohellohellohell
            ohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
          </div>
        </div>
      </div>
    </div>
  )
}
