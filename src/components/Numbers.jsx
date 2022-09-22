import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const numbers = [7,8,9,4,5,6,1,2,3,0];

const Numbers = ({ className, onClickNumber }) => {
    const numberClass = classNames(className);
    return (
        <section className={ numberClass }>
            {
                numbers.map((value) => {
                    return (
                        <Button
                            key={ value }
                            onClick={ () => onClickNumber(value) }
                        >
                            { value }
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