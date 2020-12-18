import styled from 'styled-components';

import TextButton from './TextButton';

export default styled(TextButton)`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.iconPosition === 'right' ? 'row-reverse' : 'row')};
  font-family: "Brandon Grotesque", sans-serif;
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  background-color: transparent;
  color: ${(props) => (props.disabled ? props.theme.my.colors.accentLight : props.theme.my.colors.accent)};
  border: none;
  padding:  ${(props) => (props.removePadding ? '0' : '8px 12px')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  &:focus {
    outline: 0;
  }
`;
