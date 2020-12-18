import React from 'react';
import PropTypes from 'prop-types';

import AlternatingListItem from './AlternatingListItem';

import MyTypes from '../../types';

/**
 * Alternating List with 3 fixed columns for Erna Mediathek
 */
function AlternatingList({
  className,
  children,
}) {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
}

AlternatingList.defaultProps = {
  className: '',
};

AlternatingList.propTypes = {
  className: PropTypes.string,
  children: MyTypes.childrenOf(AlternatingListItem).isRequired,
};

export default AlternatingList;
