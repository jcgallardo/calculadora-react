import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = ({ className }) => {
    const mathClass = classNames(className);
  return (
        <div className={ mathClass }>
            <Button key={ `math-button-plus` }>+</Button>
            <Button key={ `math-button-minus` }>-</Button>
            <Button key={ `math-button-multiply` }>*</Button>
            <Button key={ `math-button-divide` }>/</Button>
            <Button key={ `math-button-equal` }>=</Button>
        </div>
  )
}

MathOperations.propTypes = {
    className: PropTypes.string
}

MathOperations.defaultProps = {
    className: ''
}

export default MathOperations