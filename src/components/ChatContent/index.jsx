import React, { Component } from 'react'
import ChatHeader from '../ChatHeader'
import ChatMessage from '../ChatMessage'

import './styles.scss'

export default class ChatContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="chat-content">
        <ChatHeader />
        <ChatMessage />
      </div>
    )
  }
}
