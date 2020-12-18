import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddCircleOutlineIcon from '@iconify/icons-ion/add-circle-outline';

import IconButton from '../components/IconButton';

function AddCardLinkComponent({
  className,
  onClick,
}) {
  return (
    <IconButton
      className={className}
      icon={AddCircleOutlineIcon}
      onClickHandler={onClick}
    />
  );
}

AddCardLinkComponent.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const AddCardLink = styled(AddCardLinkComponent)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
`;

export default AddCardLink;
