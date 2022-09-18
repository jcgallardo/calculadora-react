import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.css';

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
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button-long-text'])
}

Button.defaultProps = {
  className: '',
  onClick: null,
  type: null
}

export default Button