import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Numbers = ({ className, onClickNumber }) => {
    const numberClass = classNames(className);
    return (
        <div className={ numberClass }>
            {
                Array(10).fill(null).map((value, index) => (
                    <Button
                        key={ `number-button-${index}` }
                        onClick={ onClickNumber }
                    >
                        { (index + 1) % 10 }
                    </Button>
                ))
            }
        </div>
    )
}

Numbers.propTypes = {
    className: PropTypes.string,
    onClickNumber: PropTypes.func.isRequired
}

Numbers.defaultProps = {
    className: ''
}

export default Numbers