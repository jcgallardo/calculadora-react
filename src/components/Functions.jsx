import classNames from 'classnames'
import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({className}) => {
    const functionsClass = classNames(className)
    return (
        <div className={ functionsClass }>
            <Button key={ `function-button-clear` }>Clear</Button>
            <Button key={ `function-button-undo` }>&#8592;</Button>
        </div>
    )
}

Functions.propTypes = {
    className: PropTypes.string
}

Functions.defaultProps = {
    className: ''
}

export default Functions