import classNames from 'classnames'
import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Functions = ({className, onContentClear, onDelete}) => {
    const functionsClass = classNames(className);

    return (
        <section className={ functionsClass }>
            <Button key={ `function-button-clear` } onClick={ onContentClear } type="button-long-text">CLEAR</Button>
            <Button key={ `function-button-undo` } onClick={ onDelete }>&#8592;</Button>
        </section>
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