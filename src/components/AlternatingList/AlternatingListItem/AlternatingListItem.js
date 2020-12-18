import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlternatingListItemContent = styled.div`
  display: inline-grid;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  grid-template-columns: 3fr 2fr 3fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 3fr 2fr;
    padding: 8px 0;
  }
  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    font-size: ${(props) => props.theme.my.font.sizes.body1sm};
  }
`;

const AlternatingListItemColumn = styled.div`
  line-height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 18px;
  min-width: 0;
  @media only screen and (max-width: 768px) {
    line-height: initial;
  }
  @media only screen and (max-width: 576px) {
    &:first-child {
      font-weight: bold;
    }
  }
`;

function AlternatingListItem({
  className,
  col1,
  col2,
  col3,
  onClick,
}) {
  return (
    <li
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="menuitem"
      key={col1}
    >
      <AlternatingListItemContent>
        <AlternatingListItemColumn>{col1}</AlternatingListItemColumn>
        <AlternatingListItemColumn>{col2}</AlternatingListItemColumn>
        <AlternatingListItemColumn>{col3}</AlternatingListItemColumn>
      </AlternatingListItemContent>
    </li>
  );
}

AlternatingListItem.defaultProps = {
  className: '',
  col1: null,
  col2: null,
  col3: null,
  onClick: null,
};

AlternatingListItem.propTypes = {
  className: PropTypes.string,
  col1: PropTypes.node,
  col2: PropTypes.node,
  col3: PropTypes.node,
  onClick: PropTypes.func,
};

export default AlternatingListItem;
