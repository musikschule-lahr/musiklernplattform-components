import styled from 'styled-components';

import AlternatingListItem from './AlternatingListItem';

export default styled(AlternatingListItem)`
  min-height: 40px;
  color: ${(props) => props.theme.my.colors.text};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'initial')};
  &:nth-child(even) {
    background-color: ${(props) => props.theme.my.colors.alternatingListColor};
  }
  &:hover, &:focus, &:active {
    background-color: ${(props) => props.theme.my.colors.primaryHover};
  }
`;
