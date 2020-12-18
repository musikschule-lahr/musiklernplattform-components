import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InlineIcon } from '@iconify/react';

const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

/**
 * List item
 */
function ListItem({
  children,
  icon,
  className,
  removePadding,
}) {
  return (
    <li className={`my-list-item ${className}`}>
      <ListItemContent>
        {children}
        {icon && <InlineIcon icon={icon} style={{ transform: 'translate: none' }} />}
      </ListItemContent>
    </li>
  );
}

ListItem.defaultProps = {
  className: '',
  icon: null,
  removePadding: false,
};

ListItem.propTypes = {
  className: PropTypes.string,
  /**
   * Children of the list item. Can be simple text or component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional icon object from any @iconify package.
   */
  icon: PropTypes.shape({}),
  removePadding: PropTypes.bool,
};

export default ListItem;
