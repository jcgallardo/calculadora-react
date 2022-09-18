import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Numbers = ({className}) => {
    const numberClass = classNames(className);
    return (
        <div className={ numberClass }>
            {
                Array(10).fill(null).map((value, index) => (
                    <Button key={ `number-button-${index}` }>{ (index + 1) % 10 }</Button>
                ))
            }
        </div>
    )
}

Numbers.propTypes = {
    className: PropTypes.string
}

Numbers.defaultProps = {
    className: ''
}

export default Numbers