import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseInput from '../Input/BaseInput';
import Dialog from '../Dialog';
import DialogHeader from '../Dialog/DialogHeader';
import DialogBody from '../Dialog/DialogBody';
import TextButton from '../TextButton';
import MultiSelectList from '../MultiSelectList';

const MultiBaseInput = styled(BaseInput)`
  cursor: pointer;
  color: transparent;
  text-shadow: 0 0 0 ${(props) => props.theme.my.colors.text};
  ::placeholder {
    text-shadow: none;
  }
  ::-webkit-input-placeholder {
    text-shadow: none;
  }
  :-ms-input-placeholder {
    text-shadow: none;
  }
`;

/**
 * Multi Select Input.
 *
 * Encapsulates a MultiSelectList in an overlay Dialog.
 */
function MultiSelectInput({
  className,
  options,
  onChangeHandler,
  placeholder,
  overlayTitle,
  inputStyle,
}) {
  const [listOpen, setListOpen] = useState(false);

  function onBaseInputClick() {
    setListOpen(true);
  }

  function onClose() {
    setListOpen(false);
  }

  function getInputValue() {
    return options
      .filter((option) => option.selected)
      .map((option) => option.value)
      .join(', ');
  }

  return (
    <div className={className}>
      <MultiBaseInput
        value={getInputValue()}
        type="text"
        placeholder={placeholder}
        onClick={onBaseInputClick}
        inputStyle={inputStyle}
        readOnly
      />
      {listOpen && (
        <Dialog onClose={onClose} width={300}>
          <DialogHeader>
            <h4>{overlayTitle}</h4>
            <TextButton title="Fertig" onClickHandler={onClose} />
          </DialogHeader>
          <DialogBody>
            <MultiSelectList options={options} onChangeHandler={onChangeHandler} />
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
}

MultiSelectInput.defaultProps = {
  className: '',
  onChangeHandler: () => {},
  placeholder: 'Keine Auswahl...',
  overlayTitle: 'Auswahl',
  inputStyle: {},
};

MultiSelectInput.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
  /**
   * Change handler of the multi select.
   *
   * Has parameter of type object containing the (de-)selected option.
   */
  onChangeHandler: PropTypes.func,
  /**
   * Placeholder text if no options are selected.
   */
  placeholder: PropTypes.string,
  /**
   * Title of the overlay dialog containing the multi select list.
   */
  overlayTitle: PropTypes.string,
  inputStyle: PropTypes.shape({}),
};

export default MultiSelectInput;
