import React from 'react';
import PropTypes from 'prop-types';
import ChatLaneHeader from './ChatLaneHeader';
import ChatRoomCard from '../ChatRoomCard';
import ChatLaneContent from './ChatLaneContent';
import ChatLaneFooter from './ChatLaneFooter';
import ChatCard from '../ChatCard';
import MyTypes from '../../../types';
import TextButton from '../../TextButton';
/**
 * Chat Lane, replicating a trello lane
 */
function ChatLane({
  className, children, childrenIsChatLaneContent,
  isRoomList, heading,
  onBackBtnClick, showMessageField,
  onMessageChangeHandler,
  onMessageSendHandler,
  messageInputValue,
}) {
  return (
    <div className={className}>
      <section>
        <ChatLaneHeader
          displayDivider={!isRoomList}
          onBackBtnClick={onBackBtnClick}
          heading={heading}
        />
        {childrenIsChatLaneContent ? children : (
          <ChatLaneContent>
            {children}
          </ChatLaneContent>
        )}

        {showMessageField && (
        <ChatLaneFooter
          inputValue={messageInputValue}
          onChangeHandler={onMessageChangeHandler}
          onSendHandler={onMessageSendHandler}
        />
        )}
      </section>
    </div>
  );
}

ChatLane.defaultProps = {
  className: '',
  isRoomList: false,
  heading: '',
  onBackBtnClick: null,
  showMessageField: false,
  onMessageChangeHandler: () => {},
  onMessageSendHandler: () => {},
  messageInputValue: null,
  childrenIsChatLaneContent: false,
};

ChatLane.propTypes = {
  className: PropTypes.string,
  childrenIsChatLaneContent: PropTypes.bool,
  children: MyTypes.childrenOf(ChatRoomCard, ChatCard, ChatLaneContent, TextButton).isRequired,
  isRoomList: PropTypes.bool,
  heading: PropTypes.string,
  onBackBtnClick: PropTypes.func,
  showMessageField: PropTypes.bool,
  onMessageChangeHandler: PropTypes.func,
  onMessageSendHandler: PropTypes.func,
  messageInputValue: PropTypes.string,
};

export default ChatLane;
