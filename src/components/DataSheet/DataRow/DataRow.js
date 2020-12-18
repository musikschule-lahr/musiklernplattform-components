import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ValueField = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.my.colors.text};
  grid-column-start: 2;
  display: flex;
  align-items: center;
`;

const LabelField = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.my.colors.textLight};
  grid-column-start: 1;
  display: flex;
  align-items: center;
`;

const Border = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.my.colors.dataSheetBorder}`};
  grid-column-start: 1;
  grid-column-end: 3;
`;

/**
 * Data row of a DataSheet.
 *
 * Has two fields, label and value.
 */
function DataRow({
  label,
  value,
}) {
  return (
    <>
      {label && <LabelField className="my.data.sheet-label">{label}</LabelField>}
      <ValueField className="my.data.sheet-value">{value}</ValueField>
      <Border />
    </>
  );
}

DataRow.defaultProps = {
  label: null,
};

DataRow.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DataRow;
