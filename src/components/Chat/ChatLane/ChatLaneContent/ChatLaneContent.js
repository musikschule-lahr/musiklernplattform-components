import React from 'react';
import PropTypes from 'prop-types';
import ChatRoomCard from '../../ChatRoomCard';
import ChatCard from '../../ChatCard';
import MyTypes from '../../../../types';
import TextButton from '../../../TextButton';

/**
 * Chat Lane, replicating a trello lane
 */
function ChatLaneContent({
  className, children,
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

ChatLaneContent.defaultProps = {
  className: '',
};

ChatLaneContent.propTypes = {
  className: PropTypes.string,
  children: MyTypes.childrenOf(TextButton, ChatRoomCard, ChatCard).isRequired,
};

export default ChatLaneContent;
