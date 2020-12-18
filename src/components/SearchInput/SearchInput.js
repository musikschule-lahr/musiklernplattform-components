import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { InlineIcon } from '@iconify/react';
import SearchIcon from '@iconify/icons-ion/search-outline';

const BaseInput = styled.input`
  height: 36px;
  padding-left: 32px;
  padding-right: 16px;
  border: none;
  color: ${(props) => props.theme.my.colors.text};
  background-color: ${(props) => props.theme.my.colors.secondary};
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  border-radius: 10px;
`;

const SearchInputIcon = styled(InlineIcon)`
  position: absolute;
  left: 8px;
  color: ${(props) => props.theme.my.colors.textLight};
`;

/**
 * Search input field component.
 */
function SearchInput({
  name,
  value,
  disabled,
  placeholder,
  className,
  inputStyle,
  onChangeHandler,
}) {
  function onChange(e) {
    if (onChangeHandler) onChangeHandler(e.target.value);
  }

  return (
    <div className={className}>
      <SearchInputIcon
        icon={SearchIcon}
        disabled={disabled}
      />
      <BaseInput
        name={name}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyle}
      />
    </div>
  );
}

SearchInput.defaultProps = {
  name: null,
  value: '',
  disabled: false,
  placeholder: 'Search...',
  className: '',
  inputStyle: {},
  onChangeHandler: () => {},
};

SearchInput.propTypes = {
  /**
   * name attribute of the input element.
   */
  name: PropTypes.string,
  /**
   * Input value, expected to be state controlled outside of this component.
   */
  value: PropTypes.string,
  /**
   * Disable input.
   */
  disabled: PropTypes.bool,
  /**
   * placeholder attribute of the input element.
   */
  placeholder: PropTypes.string,
  /**
   * Classname of the input container.
   */
  className: PropTypes.string,
  /**
   * Style applied directly to the input element.
   */
  inputStyle: PropTypes.shape({}),
  /**
   * Change handler.
   */
  onChangeHandler: PropTypes.func,
};

export default SearchInput;
