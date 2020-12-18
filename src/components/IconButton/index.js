/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

import IconButton from './IconButton';

export default styled(IconButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  background-color: transparent;
  color: ${(props) => (props.disabled ? props.theme.my.colors.accentLight : props.theme.my.colors.accent)};
  border: none;
  margin: 0;
  padding: 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  &:focus {
    outline: 0;
  }
  & > svg {
    padding: ${(props) => (props.label ? 8 : 0)}px;
    padding-left: ${(props) => (props.removePadding ? 0 : (props.label ? 8 : 0))}px;
    opacity: ${(props) => (props.disabled && props.opacityOnDisabled ? 0.5 : 1)};
  }
  & > span {
    font-size: ${(props) => props.theme.my.font.sizes.body1};
    color: ${(props) => (props.disabled ? props.theme.my.colors.textTransparent : props.theme.my.colors.text)};
  }
`;
