import React, { Component } from 'react'

import ContentNavView from '../../components/ContentNavView'
import ChatContent from '../../components/ChatContent'
import './styles.scss'

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="chat">
        <ContentNavView />
        <ChatContent />
      </div>
    )
  }
}
