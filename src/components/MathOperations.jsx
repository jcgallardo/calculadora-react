import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = ({ className, onClickOperation, onClickEqual }) => {
    const mathClass = classNames(className);

    return (
        <section className={ mathClass }>
            <Button key={ `math-button-plus` } onClick={ () => onClickOperation("+") }>+</Button>
            <Button key={ `math-button-minus` } onClick={ () => onClickOperation("-") }>-</Button>
            <Button key={ `math-button-multiply` } onClick={ () => onClickOperation("x") }>x</Button>
            <Button key={ `math-button-divide` } onClick={ () => onClickOperation("/") }>/</Button>
            <Button key={ `math-button-equal` } onClick={ onClickEqual }>=</Button>
        </section>
    )
}

MathOperations.propTypes = {
    className: PropTypes.string,
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

MathOperations.defaultProps = {
    className: ''
}

export default MathOperations