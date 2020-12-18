import React from 'react';
import PropTypes from 'prop-types';

/**
 * Grid row
 */
function Row({ className, children }) {
  return (
    <div className={className}>{children}</div>
  );
}

Row.defaultProps = {
  className: '',
  children: null,
  breakpoint: null,
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Defines the breakpoint where the row turns into columns.
   *
   * Available breakpoints:
   *  sm: 576px
   *  md: 768px
   *  lg: 992px
   *  xl: 1200px
   */
  // eslint-disable-next-line react/no-unused-prop-types
  breakpoint: PropTypes.string,
};

export default Row;
