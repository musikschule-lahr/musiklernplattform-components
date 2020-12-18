import React from 'react';
import PropTypes from 'prop-types';

import {
  CardWrapper, Detail,
} from './ChatDateIndicatorComponents';

/**
 * Chat Card, replicating a trello lane
 */
function ChatCard({
  className,
  description,
}) {
  return (
    <CardWrapper className={className}>
      <Detail>{description}</Detail>
    </CardWrapper>
  );
}

ChatCard.defaultProps = {
  className: '',
  description: '',
};

ChatCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
};

export default ChatCard;
