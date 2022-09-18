import React from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'

const Numbers = props => {
  return (
    <div className="numbers">
        {
            Array(10).fill(null).map((value, index) => (
                <Button key={ `number-button-${index}` }>{ (index + 1) % 10 }</Button>
            ))
        }
    </div>
  )
}

Numbers.propTypes = {}

export default Numbers