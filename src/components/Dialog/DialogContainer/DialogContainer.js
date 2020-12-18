import React from 'react';
import PropTypes from 'prop-types';

import MyTypes from '../../../types';

import DialogHeader from '../DialogHeader';
import DialogBody from '../DialogBody';
import {
  DialogSmallHeader,
  DialogSmallBody,
  DialogNormalHeader,
  DialogNormalBody,
} from '../DialogComponents';
/**
 * Dialog Container
 */
function DialogContainer({
  className,
  children,
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

DialogContainer.defaultProps = {
  className: '',
};

DialogContainer.propTypes = {
  className: PropTypes.string,
  children: MyTypes.childrenOf(DialogHeader, DialogBody, DialogSmallHeader,
    DialogSmallBody, DialogNormalHeader, DialogNormalBody).isRequired,
};

export default DialogContainer;
