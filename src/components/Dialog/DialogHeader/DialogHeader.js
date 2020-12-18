import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dialog Header
 */
function DialogHeader({
  className,
  children,
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

DialogHeader.defaultProps = {
  className: '',
};

DialogHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DialogHeader;
