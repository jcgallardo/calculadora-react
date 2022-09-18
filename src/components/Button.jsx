import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, className, onClick }) => {
  const buttonClass = classNames(className);
  return (
    <button className={ buttonClass } onClick={ onClick }>
        { children }
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Button.defaultProps = {
  className: ''
}

export default Button