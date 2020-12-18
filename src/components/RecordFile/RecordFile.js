import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '@iconify/react';
import PlayIcon from '@iconify/icons-ion/play';

const RecordFileIcon = styled(Icon)`
  color: white;
  font-size: 12px;
  margin: 0;
  padding: 4px;
  position: absolute;
  top: -8px;
  left: -8px;
  background-color: red;
  border-radius: 100%;
`;

/**
 * Recorded File component for Audio Player.
 */
function RecordFile({
  className,
  title,
  description,
  onClickHandler,
}) {
  return (
    <div
      className={className}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      role="button"
      tabIndex="0"
    >
      <RecordFileIcon icon={PlayIcon} />
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
}

RecordFile.defaultProps = {
  className: '',
  title: '',
  description: null,
  onClickHandler: () => {},
};

RecordFile.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.node,
  onClickHandler: PropTypes.func,
};

export default RecordFile;
