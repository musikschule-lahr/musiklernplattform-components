import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dialog Body container
 */
function DialogBody({
  className,
  children,
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

DialogBody.defaultProps = {
  className: '',
};

DialogBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DialogBody;
