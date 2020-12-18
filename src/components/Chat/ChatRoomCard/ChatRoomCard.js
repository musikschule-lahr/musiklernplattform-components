import React from 'react';
import PropTypes from 'prop-types';
import { InlineIcon } from '@iconify/react';
import IconAttachOutline from '@iconify/icons-ion/attach-outline';

import {
  CardWrapper, Detail, Badge, UnreadCount,
} from './ChatRoomCardComponents';

/**
 * Chat Card, replicating a trello lane
 */
function ChatRoomCard({
  className,
  roomType,
  title,
  attachementCount,
  onClickHandler,
}) {
  return (
    <CardWrapper

      roomType={roomType}
      onClick={onClickHandler}
    >
      <Detail className={attachementCount > 0 ? 'roomDetail_hasAttachementCount' : ''}><span>{title}</span></Detail>
      {attachementCount > 0 && (
        <UnreadCount>
          <Badge roomType={roomType}>
            {attachementCount}
          </Badge>
        </UnreadCount>
      )}
    </CardWrapper>
  );
}

ChatRoomCard.defaultProps = {
  className: '',
  attachementCount: 0,
  roomType: '',
  title: '',
  onClickHandler: () => {},
};

ChatRoomCard.propTypes = {
  className: PropTypes.string,
  roomType: PropTypes.string,
  title: PropTypes.string,
  attachementCount: PropTypes.number,
  onClickHandler: PropTypes.func,
};

export default ChatRoomCard;
