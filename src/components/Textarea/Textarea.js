import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BaseTextarea from './BaseTextarea';

const TextareaWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const TextareaError = styled.span`
  color: ${(props) => props.theme.my.colors.error};
`;

/**
 * Textarea component
 */
function Textarea({
  name,
  value,
  disabled,
  placeholder,
  className,
  textareaStyle,
  onChangeHandler,
  error,
}) {
  function onChange(e) {
    if (onChangeHandler) onChangeHandler(e.target.value);
  }

  return (
    <div className={className}>
      <TextareaWrapper>
        <BaseTextarea
          value={value}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          style={textareaStyle}
          error={error}
        />
      </TextareaWrapper>
      {error && <TextareaError>{error}</TextareaError>}
    </div>
  );
}

Textarea.defaultProps = {
  className: '',
  value: '',
  onChangeHandler: () => {},
  textareaStyle: {},
  name: null,
  placeholder: null,
  disabled: false,
  error: null,
};

Textarea.propTypes = {
  /**
   * Classname of the textarea container.
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
   * Style applied directly to the input element.
   */
  textareaStyle: PropTypes.shape({}),
  /**
   * name attribute of the input element.
   */
  name: PropTypes.string,
  /**
   * placeholder attribute of the input element.
   */
  placeholder: PropTypes.string,
  /**
   * Disable input.
   */
  disabled: PropTypes.bool,
  /**
   * Error message.
   */
  error: PropTypes.string,
};

export default Textarea;
