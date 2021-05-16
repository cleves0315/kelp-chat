import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import TabBar from '../../components/TabBar'
import './styles.scss'

export default function Layout() {
  return (
    <div className="layout">
      <TabBar />
      <div className="main">
        <Switch>
          <Route path="/chat" component={loadable(() => import('../Chat'))} />
          <Route path="/setting" component={loadable(() => import('../Setting'))} />
        </Switch>
      </div>
    </div>
  )
}
