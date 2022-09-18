import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Result = ({ className, value }) => {
  const resultClass = classNames(className);
  return (
    <div className={ resultClass }>
      { value }
    </div>
  )
}

Result.propTypes = {
    className: PropTypes.string
}

Result.defaultProps = {
    className: ''
}

export default Result