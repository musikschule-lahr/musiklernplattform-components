import React from 'react';
import PropTypes from 'prop-types';

import {
  CardWrapper, Detail, Footer, Infos, Author,
} from './ChatCardComponents';

/**
 * Chat Card, replicating a trello lane
 */
function ChatCard({
  className,
  messageType,
  description,
  time,
  author,
}) {
  return (
    <CardWrapper className={className} messageType={messageType}>
      <Detail>
        {author && (
        <Author>
          {author}
        </Author>
        )}
        {description}
      </Detail>
      {time
       && (
       <Footer>
         <Infos>
           <p>
             {time}
           </p>
         </Infos>
       </Footer>
       )}
    </CardWrapper>
  );
}

ChatCard.defaultProps = {
  className: '',
  messageType: '',
  description: '',
  time: '',
  author: null,
};

ChatCard.propTypes = {
  className: PropTypes.string,
  messageType: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node]),
  time: PropTypes.string,
  author: PropTypes.string,
};

export default ChatCard;
