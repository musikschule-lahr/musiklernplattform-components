import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

/**
 * Multi Select List
 */
function MultiSelectList({
  className,
  options,
  onChangeHandler,
}) {
  function getOnClickHandler(option) {
    return () => onChangeHandler(option);
  }

  return (
    <ul className={className}>
      {options.map((option) => (
        <Option
          key={`${option.value}-${option.key}`}
          selected={option.selected}
          onClickHandler={getOnClickHandler(option)}
        >
          {option.value}
        </Option>
      ))}
    </ul>
  );
}

MultiSelectList.defaultProps = {
  className: '',
  onChangeHandler: () => {},
};

MultiSelectList.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
  /**
   * Change handler of the multi select.
   *
   * Has parameter of type array containing the (de-)selected keys.
   */
  onChangeHandler: PropTypes.func,
};

export default MultiSelectList;
