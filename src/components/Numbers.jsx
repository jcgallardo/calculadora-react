import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Numbers = ({ className, onClickNumber }) => {
    const numberClass = classNames(className);
    return (
        <section className={ numberClass }>
            {
                Array(10).fill(null).map((value, index) => {
                    const val = (index + 1) % 10;
                    return (
                        <Button
                            key={ val }
                            onClick={ () => onClickNumber(val) }
                        >
                            { val }
                        </Button>
                    );
                })
            }
        </section>
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