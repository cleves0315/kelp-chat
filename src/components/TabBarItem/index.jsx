import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.scss'

export default function TabBarItem(props) {
  return (
    <div className="tab-bar-item">
      <NavLink className="link" activeClassName="active-link" to={props.to}>
        {props.render()}
      </NavLink>
    </div>
  )
}
