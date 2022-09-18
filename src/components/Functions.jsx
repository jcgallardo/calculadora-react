import React from 'react'
import Button from './Button'
// import PropTypes from 'prop-types'

const Functions = props => {
  return (
    <div className="functions">
        <Button key={ `function-button-clear` }>Clear</Button>
        <Button key={ `function-button-undo` }>&#8592;</Button>
    </div>
  )
}

Functions.propTypes = {}

export default Functions