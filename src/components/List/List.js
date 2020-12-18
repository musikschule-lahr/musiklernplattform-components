import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import ListDivider from './ListDivider';

import MyTypes from '../../types';

/**
 * List
 */
function List({
  className,
  children,
}) {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
}

List.defaultProps = {
  className: '',
};

List.propTypes = {
  className: PropTypes.string,
  children: MyTypes.childrenOf(ListItem, ListDivider).isRequired,
};

export default List;
