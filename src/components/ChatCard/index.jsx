import React from 'react'
import Avatar from '../Avatar'

import './styles.scss'

export default function ChatCard() {
  return (
    <div className="chat-card">
      <Avatar />
      <div className="content">
        <div className="title">机器人</div>
        <div className="message">机器人：hello</div>
      </div>
      <div className="info-wrapper">
        <div className="date">06/17</div>
      </div>
    </div>
  )
}
