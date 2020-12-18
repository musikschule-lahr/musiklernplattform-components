import styled from 'styled-components';

import NavItem from './NavItem';

export default styled(NavItem)`
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  align-items: center;
  align-self: center;
  color:${(props) => (props.active ? props.theme.my.colors.accent : props.theme.my.colors.textTransparent)};
  & a, & button{
    text-decoration: none;
    color:${(props) => (props.theme.my.colors.textTransparent)};
  }
`;
