import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Dialog from '../components/Dialog';
import DialogBody from '../components/Dialog/DialogBody';
import Input from '../components/Input';
import TextButton from '../components/TextButton';
import {
  DialogNormalHeader,
  DialogNormalBody,
  DialogNormalContentRow,
} from '../components/Dialog/DialogComponents';

const ModalTextBox = styled.label`
    div {
      margin: 18px 0;
    }
    input{
      width:100%;
    }
`;

function NewCardForm({
  onAdd,
  onCancel,
}) {
  const [values, setValues] = useState({});

  function updateField(field, value) {
    setValues({ ...values, [field]: value });
  }

  function handleAdd() {
    onAdd(values);
  }

  return (
    <Dialog width={300} onClose={onCancel}>
      <DialogNormalHeader>
        <h4>Karte hinzufügen</h4>
        <TextButton title="Fertig" onClickHandler={handleAdd} />
      </DialogNormalHeader>
      <DialogNormalBody>
        <DialogNormalContentRow>
          <ModalTextBox>
            <div>Beschreibung</div>
            <Input
              label="Beschreibung"
              value={values.description}
              onChangeHandler={(value) => updateField('description', value)}
              isMultipleLine
            />
          </ModalTextBox>

        </DialogNormalContentRow>

      </DialogNormalBody>
    </Dialog>
  );
}

NewCardForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default NewCardForm;
