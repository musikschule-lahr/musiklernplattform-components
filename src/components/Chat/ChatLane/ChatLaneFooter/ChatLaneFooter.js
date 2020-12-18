import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@iconify/icons-ion/paper-plane';
import Input from '../../../Input';
import IconButton from '../../../IconButton';
/**
 * Chat Lane, replicating a trello lane
 */
function ChatLaneFooter({
  className, onChangeHandler, inputValue, onSendHandler,
}) {
  return (
    <div className={className}>
      <Input
        value={inputValue}
        onChangeHandler={onChangeHandler}
      />
      <IconButton
        icon={SendIcon}
        onClickHandler={onSendHandler}
      />
    </div>
  );
}

ChatLaneFooter.defaultProps = {
  className: '',
  inputValue: '',
};

ChatLaneFooter.propTypes = {
  className: PropTypes.string,
  inputValue: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  onSendHandler: PropTypes.func.isRequired,
};

export default ChatLaneFooter;
