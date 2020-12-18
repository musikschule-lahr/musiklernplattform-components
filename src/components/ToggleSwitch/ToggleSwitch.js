import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Handle = styled.span`
  background-color: white;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-block;
  height: 26px;
  width: 26px;
  top: 1px;
  left: ${(props) => (props.checked ? 21 : 1)}px;
  position: absolute;
  transition: 0.2s;
`;

const Input = styled.input`
  display: none;
`;

/**
 * Toggle Switch iOS Style
 */
function ToggleSwitch({
  className,
  checked,
  disabled,
  name,
  onChange,
}) {
  const ref = useRef(null);

  function handleChange(e) {
    onChange(e.target.checked);
  }

  function handleClick() {
    if (disabled) return;
    // if parent has a label, we don't need to emit the change event
    if (ref.current.parentNode && ref.current.parentNode.tagName.toLowerCase() === 'label') return;
    onChange(!checked);
  }

  return (
    <span
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      className={className}
      onClick={handleClick}
      onKeyDown={handleClick}
      ref={ref}
    >
      <Handle
        checked={checked}
        disabled={disabled}
      />
      <Input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={handleChange}
      />
    </span>
  );
}

ToggleSwitch.defaultProps = {
  className: '',
  disabled: false,
  name: '',
  onChange: () => {},
};

ToggleSwitch.propTypes = {
  className: PropTypes.string,
  /**
   * Checked state of the switch.
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Flag to disable the switch.
   */
  disabled: PropTypes.bool,
  name: PropTypes.string,
  /**
   * Change handler, expects a function with a single boolean paramter "checked".
   */
  onChange: PropTypes.func,
};

export default ToggleSwitch;
