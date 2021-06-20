import React from 'react'

import './styles.scss'

export default function SeachBar() {
  return (
    <div className="seach-bar">
      <div className="user-info" />
      <div className="search-box">
        <svg
          t="1624194761146"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3169"
        >
          <path
            d="M954.368 927.04l-27.264 27.264c-7.552 7.552-19.776 7.552-27.264 0l-205.952-205.952c-151.488 124.16-375.424 115.52-516.864-25.92-150.656-150.656-150.656-394.88 0-545.536 150.656-150.656 394.88-150.656 545.536 0 141.44 141.44 150.016 365.312 25.92 516.864l205.952 205.952C961.856 907.328 961.856 919.552 954.368 927.04zM667.968 231.552c-120.512-120.512-315.904-120.512-436.416 0-120.512 120.512-120.512 315.904 0 436.416 120.512 120.512 315.904 120.512 436.416 0C788.48 547.456 788.48 352.064 667.968 231.552z"
            p-id="3170"
            fill="#A5A5A6"
          />
        </svg>
        <input className="search-field" type="text" placeholder="查询用户/群" />
      </div>
      <div className="btn-box">
        <svg
          t="1624196162774"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4696"
          width="200"
          height="200"
        >
          <path
            d="M544.256 480.256h307.2a32.256 32.256 0 0 1 0 64h-307.2v307.2a32.256 32.256 0 0 1-64 0v-307.2h-307.2a32.256 32.256 0 1 1 0-64h307.2v-307.2a32.256 32.256 0 1 1 64 0z"
            p-id="4697"
            fill="#07b45b"
          />
        </svg>
      </div>
    </div>
  )
}
