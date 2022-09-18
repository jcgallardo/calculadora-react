import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = props => {
  return (
        <div className="math-operations">
            <Button key={ `math-button-plus` }>+</Button>
            <Button key={ `math-button-minus` }>-</Button>
            <Button key={ `math-button-multiply` }>*</Button>
            <Button key={ `math-button-divide` }>/</Button>
            <Button key={ `math-button-equal` }>=</Button>
        </div>
  )
}

MathOperations.propTypes = {}

export default MathOperations