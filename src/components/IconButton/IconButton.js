/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';

/**
 * Icon Button Component.
 */
function IconButton({
  icon,
  label,
  onClickHandler,
  disabled,
  className,
  removePadding,
  opacityOnDisabled,
}) {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={disabled}
      className={className}
    >
      <Icon icon={icon} />
      {label && <span>{label}</span>}
    </button>
  );
}

IconButton.defaultProps = {
  disabled: false,
  className: '',
  label: null,
  removePadding: false,
  opacityOnDisabled: false,
};

IconButton.propTypes = {
  /**
   * Icon object from any @iconify package.
   */
  icon: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  /**
   * Flag to disable the button.
   */
  disabled: PropTypes.bool,
  /**
   * Click handler of the button.
   */
  onClickHandler: PropTypes.func.isRequired,
  /**
   * Optional label for the button
   */
  label: PropTypes.node,
  removePadding: PropTypes.bool,
  opacityOnDisabled: PropTypes.bool,
};

export default IconButton;
