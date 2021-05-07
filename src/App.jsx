import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

function App() {
  const i = 0

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" component={loadable(() => import('./containers/Login'))} />
          <Route component={loadable(() => import('./components/NotFound'))} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
