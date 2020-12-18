import React from 'react';
import PropTypes from 'prop-types';
import { InlineIcon } from '@iconify/react';

/**
 * Text Button with optional inline icon.
 */
function TextButton({
  title,
  icon,
  onClickHandler,
  disabled,
  className,
  removePadding,
}) {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={disabled}
      className={className}
    >
      {icon && <InlineIcon icon={icon} />}
      <span>{title}</span>
    </button>
  );
}

TextButton.defaultProps = {
  title: 'Click me!',
  icon: null,
  iconPosition: 'left',
  disabled: false,
  className: '',
  removePadding: false,
};

TextButton.propTypes = {
  /**
   * Title of the button.
   */
  title: PropTypes.string,
  /**
   * Icon object from any @iconify package.
   */
  icon: PropTypes.shape({}),
  // eslint-disable-next-line react/no-unused-prop-types
  iconPosition: PropTypes.oneOf([
    'left',
    'right',
  ]),
  className: PropTypes.string,
  /**
   * Flag to disable the button.
   */
  disabled: PropTypes.bool,
  /**
   * Click handler of the button.
   */
  onClickHandler: PropTypes.func.isRequired,
  // Removes padding left
  removePadding: PropTypes.bool,
};

export default TextButton;
