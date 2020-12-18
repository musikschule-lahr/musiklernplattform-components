import React from 'react';
import PropTypes from 'prop-types';

import { InlineIcon } from '@iconify/react';
import IconAttachOutline from '@iconify/icons-ion/attach-outline';

import {
  CardRightContent,
} from 'react-trello/dist/styles/Base';
import {
  MovableCardWrapper,
  CardTitle,
  CardHeader,
  Detail,
  Footer,
  Attachements,
  Infos,
  Badge,
} from './styles/Base';
import DeleteButton from './DeleteButton';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    const { onDelete } = this.props;
    if (onDelete) onDelete();
    e.stopPropagation();
  }

  render() {
    const {
      showDeleteButton,
      style,
      onClick,
      className,
      id,
      title,
      label,
      description,
      cardDraggable,
      author,
      date,
      attachementCount,
      messageType,
      badge,
      group,
      badgePosition,
      timetableActive,
    } = this.props;

    const showFooter = !!(author || date || attachementCount);

    return (
      <MovableCardWrapper
        data-id={id}
        onClick={onClick}
        style={style}
        className={className}
        messageType={messageType}
        group={group}
        timetableActive={timetableActive}
      >
        {showDeleteButton && <DeleteButton onDelete={this.onDelete} />}
        {title && (
          <CardHeader>
            <CardTitle draggable={cardDraggable}>{title}</CardTitle>
            <CardRightContent>{label}</CardRightContent>
            {badge > 0 && <Badge badgePosition={badgePosition}>{badge}</Badge>}
          </CardHeader>
        )}
        <Detail>{description}</Detail>
        {showFooter && (
          <Footer>
            {attachementCount > 0 && (
              <Attachements>
                <InlineIcon icon={IconAttachOutline} />
                {attachementCount}
              </Attachements>
            )}
            <Infos>
              <p>{author}</p>
              <p>{date && date.toString()}</p>
            </Infos>
          </Footer>
        )}
      </MovableCardWrapper>
    );
  }
}

Card.propTypes = {
  showDeleteButton: PropTypes.bool,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  cardDraggable: PropTypes.bool,
  author: PropTypes.string,
  date: PropTypes.string,
  attachementCount: PropTypes.number,
  messageType: PropTypes.oneOf([
    'none',
    'incoming',
    'outgoing',
  ]),
  badge: PropTypes.number,
  group: PropTypes.bool,
  timetableActive: PropTypes.bool,
  badgePosition: PropTypes.string,
};

Card.defaultProps = {
  showDeleteButton: false,
  onDelete: () => {},
  onClick: () => {},
  style: {},
  title: null,
  description: '',
  label: '',
  className: '',
  cardDraggable: false,
  author: null,
  date: null,
  attachementCount: 0,
  messageType: 'none',
  badge: 0,
  group: false,
  timetableActive: false,
  badgePosition: 'inline',
};

export default Card;
