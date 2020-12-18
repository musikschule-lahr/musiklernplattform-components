import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DataRow from './DataRow';

import MyTypes from '../../types';

const DataSheetContainer = styled.div`
  display: ${(props) => (props.width === 'auto' ? 'inline-grid' : 'grid')};
  grid-template-columns: 1fr auto;
  grid-gap: 0;
  width: ${(props) => props.width};
`;

/**
 * Responsive Data Sheet with two fixed columns.
 */
function DataSheet({
  className,
  children,
  width,
}) {
  return (
    <DataSheetContainer className={className} width={width}>
      {children}
    </DataSheetContainer>
  );
}

DataSheet.defaultProps = {
  className: '',
  width: 'auto',
};

DataSheet.propTypes = {
  className: PropTypes.string,
  children: MyTypes.childrenOf(DataRow).isRequired,
  /**
   * Width of the data sheet.
   *
   * Defaults to 'auto' width depending on content.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  width: PropTypes.string,
};

export default DataSheet;
