import React from 'react';
import PropTypes from 'prop-types';

/**
 * Basic Button Component.
 */
function Button({
  title,
  onClickHandler,
  disabled,
  className,
}) {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={disabled}
      className={className}
    >
      {title}
    </button>
  );
}

Button.defaultProps = {
  title: 'Click me!',
  disabled: false,
  className: '',
};

Button.propTypes = {
  /**
   * Title of the button.
   */
  title: PropTypes.string,
  className: PropTypes.string,
  /**
   * Flag to disable the button.
   */
  disabled: PropTypes.bool,
  /**
   * Click handler of the button.
   */
  onClickHandler: PropTypes.func.isRequired,
};

export default Button;
