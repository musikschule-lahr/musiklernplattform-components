import React from 'react';
import PropTypes from 'prop-types';

/**
 * Grid column
 */
function Col({ className, children }) {
  return (
    <div className={className}>{children}</div>
  );
}

Col.defaultProps = {
  className: '',
  children: null,
};

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Col;
