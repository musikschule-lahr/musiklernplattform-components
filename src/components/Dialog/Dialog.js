import React from 'react';
import PropTypes from 'prop-types';

import MyTypes from '../../types';

import Modal from '../Modal';
import Backdrop from './Backdrop';
import DialogContainer from './DialogContainer';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import {
  DialogSmallHeader,
  DialogSmallBody,
  DialogNormalHeader,
  DialogNormalBody,
} from './DialogComponents';

/**
 * Dialog overlay component with backdrop.
 */
function Dialog({
  className,
  children,
  onClose,
  width,
}) {
  return (
    <Modal>
      <div className={className} role="presentation">
        <Backdrop onClick={onClose} />
        <DialogContainer width={width}>
          {children}
        </DialogContainer>
      </div>
    </Modal>
  );
}

Dialog.defaultProps = {
  className: '',
  width: 600,
};

Dialog.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  children: MyTypes.childrenOf(DialogHeader, DialogBody, DialogSmallHeader, DialogNormalHeader,
    DialogSmallBody, DialogNormalBody).isRequired,
};

export default Dialog;
