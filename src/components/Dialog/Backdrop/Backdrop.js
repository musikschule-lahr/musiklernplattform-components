import React from 'react';
import PropTypes from 'prop-types';

/**
 * Backdrop component for Dialog.
 */
function Backdrop({
  className,
  onClick,
}) {
  return <div aria-hidden className={`my-backdrop ${className}`} onClick={onClick} />;
}

Backdrop.defaultProps = {
  className: '',
};

Backdrop.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
