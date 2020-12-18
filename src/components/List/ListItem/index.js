import styled from 'styled-components';

import ListItem from './ListItem';

export default styled(ListItem)`
  height: 44px;
  line-height: 44px;
  padding:  ${(props) => (props.removePadding ? '0' : '0 18px')};
  color: ${(props) => props.theme.my.colors.text};
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  &:hover, &:focus, &:active {
    color: ${(props) => props.theme.my.colors.accent};
  }
  & + .my-list-item {
    border-top: 1px solid ${(props) => props.theme.my.colors.lightBorder};
  }
`;
