import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

function Avatar(props) {
  return (
    <div
      className="avatar"
      style={{
        width: props.width,
        height: props.height,
        minWidth: props.width,
        minHeight: props.height,
      }}
    >
      <div className="avatar-text">
        <span className="txt">机</span>
      </div>
    </div>
  )
}

export default Avatar

Avatar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

Avatar.defaultProps = {
  width: '45px',
  height: '45px',
}
