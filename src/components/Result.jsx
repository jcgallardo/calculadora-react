import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Result = ({ className, total, value }) => {
  const resultClass = classNames(className);
  return (
    <section className={ resultClass }>
      { value }
      { total !== '' && <span className='result-total'>{ total }</span> }
    </section>
  )
}

Result.propTypes = {
    className: PropTypes.string,
    total: PropTypes.string,
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    className: ''
}

export default Result