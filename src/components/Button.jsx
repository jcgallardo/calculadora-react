import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, className, onClick, type }) => {
  const buttonClass = classNames(className, type);

  const handleClick = (event) => {
    console.log('Button click!', event);
    onClick && onClick();
  }

  return (
    <button className={ buttonClass } onClick={ handleClick }>
        { children }
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  onClick: null
}

export default Button