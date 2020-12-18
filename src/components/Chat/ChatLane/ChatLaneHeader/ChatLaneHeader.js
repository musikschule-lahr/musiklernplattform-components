import React from 'react';
import PropTypes from 'prop-types';
import ChevronBack from '@iconify/icons-ion/chevron-back';
import IconButton from '../../../IconButton';
/**
 * Chat Lane, replicating a trello lane
 */
function ChatLaneHeader({
  heading, displayDivider, onBackBtnClick, className,
}) {
  return (
    <div className={className}>
      {displayDivider ? (
        <header className="chat-lane-header">
          {onBackBtnClick && (
          <IconButton
            icon={ChevronBack}
            onClickHandler={onBackBtnClick}
          />
          )}
          <div className="chat-lane-header__divider-heading">
            <span>{heading}</span>
          </div>

        </header>
      ) : (
        <header>
          <span className="chat-lane-header__ordinary-heading">{heading}</span>
        </header>
      ) }

    </div>
  );
}

ChatLaneHeader.defaultProps = {
  className: '',
  heading: '',
  onBackBtnClick: null,
  displayDivider: false,
};

ChatLaneHeader.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  onBackBtnClick: PropTypes.func,
  displayDivider: PropTypes.bool,
};

export default ChatLaneHeader;
