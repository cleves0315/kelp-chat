import React from 'react'
import SearchBar from '../SeachBar'
import ChatCard from '../ChatCard'

import './styles.scss'

const list = [
  { id: 1, title: '机器人' },
  { id: 2, title: '机器人' },
]

export default function ContentNavView() {
  return (
    <div className="content-nav-bar">
      <SearchBar />
      <div className="cart-list">
        {list.map((m) => (
          <React.Fragment key={m.id}>
            <ChatCard />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
