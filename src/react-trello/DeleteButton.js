import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '@iconify/react';
import IconDelete from '@iconify/icons-ion/close-outline';

function DeleteButtonComponent({
  onDelete,
  className,
}) {
  return (
    <button
      type="button"
      onClick={onDelete}
      className={className}
    >
      <Icon icon={IconDelete} />
    </button>
  );
}

DeleteButtonComponent.propTypes = {
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const DeleteButton = styled(DeleteButtonComponent)`
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 8px;
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;

export default DeleteButton;
