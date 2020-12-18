import React from 'react';
import PropTypes from 'prop-types';

import LibraryItem from './LibraryItem';

import MyTypes from '../../types';

/**
 * Horizontal (Sidescrolling) List for library elements.
 */
function LibraryHorizontalList({
  className,
  children,
}) {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
}

LibraryHorizontalList.defaultProps = {
  className: '',
  children: null,
};

LibraryHorizontalList.propTypes = {
  className: PropTypes.string,
  children: MyTypes.childrenOf(LibraryItem),
};

export default LibraryHorizontalList;
