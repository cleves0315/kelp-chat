import React from 'react'
import { CommentOutlined, SettingOutlined } from '@ant-design/icons'

import TabBarItem from '../TabBarItem'
import './styles.scss'

export default function TabBar() {
  return (
    <div className="tab-bar">
      <div className="tab-bar-head">
        <div className="avatar">9</div>
      </div>
      <TabBarItem to="chat" render={() => <CommentOutlined />} />
      <TabBarItem to="setting" render={() => <SettingOutlined />} />
    </div>
  )
}
