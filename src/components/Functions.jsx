import classNames from 'classnames'
import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({className, onContentClear, onDelete}) => {
    const functionsClass = classNames(className);

    return (
        <div className={ functionsClass }>
            <Button key={ `function-button-clear` } onClick={ onContentClear }>Clear</Button>
            <Button key={ `function-button-undo` } onClick={ onDelete }>&#8592;</Button>
        </div>
    )
}

Functions.propTypes = {
    className: PropTypes.string,
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

Functions.defaultProps = {
    className: ''
}

export default Functions