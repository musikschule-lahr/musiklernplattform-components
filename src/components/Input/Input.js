import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { InlineIcon } from '@iconify/react';
import ClearIcon from '@iconify/icons-ion/close-outline';

import BaseInput from './BaseInput';

const InputInlineIcon = styled(InlineIcon)`
  position: absolute;
  right: 8px;
  color: ${(props) => props.theme.my.colors.text};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const InputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const InputError = styled.span`
  color: ${(props) => props.theme.my.colors.error};
`;

/**
 * Basic input component with optional inline clear button.
 */
function Input({
  name,
  value,
  type,
  disabled,
  placeholder,
  className,
  inputStyle,
  onChangeHandler,
  clearButton,
  onClearHandler,
  error,
}) {
  function onChange(e) {
    if (onChangeHandler) onChangeHandler(e.target.value);
  }

  function onClear() {
    if (!disabled && onClearHandler) onClearHandler();
  }

  return (
    <div className={className}>
      <InputWrapper>
        <BaseInput
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          style={inputStyle}
          clearButton={clearButton}
          error={error}
        />
        {clearButton && (
          <InputInlineIcon
            icon={ClearIcon}
            disabled={disabled}
            onClick={onClear}
          />
        )}
      </InputWrapper>
      {error && <InputError>{error}</InputError>}
    </div>
  );
}

Input.defaultProps = {
  className: '',
  value: '',
  onChangeHandler: () => {},
  clearButton: false,
  type: 'text',
  inputStyle: {},
  name: null,
  placeholder: null,
  onClearHandler: () => {},
  disabled: false,
  error: null,
};

Input.propTypes = {
  /**
   * Classname of the input container.
   */
  className: PropTypes.string,
  /**
   * Input value, expected to be state controlled outside of this component.
   */
  value: PropTypes.string,
  /**
   * Change handler.
   */
  onChangeHandler: PropTypes.func,
  /**
   * Flag to enable inline clear button.
   */
  clearButton: PropTypes.bool,
  /**
   * Type of the input, defaults to text.
   */
  type: PropTypes.oneOf([
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'month',
    'password',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  /**
   * Style applied directly to the input element.
   */
  inputStyle: PropTypes.shape({}),
  /**
   * name attribute of the input element.
   */
  name: PropTypes.string,
  /**
   * placeholder attribute of the input element.
   */
  placeholder: PropTypes.string,
  /**
   * Function called on clear icon click.
   */
  onClearHandler: PropTypes.func,
  /**
   * Disable input.
   */
  disabled: PropTypes.bool,
  /**
   * Error message.
   */
  error: PropTypes.string,
};

export default Input;
