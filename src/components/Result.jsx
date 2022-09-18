import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Result = ({ className, value }) => {
  const resultClass = classNames(className);
  return (
    <section className={ resultClass }>
      { value }
    </section>
  )
}

Result.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    className: ''
}

export default Result