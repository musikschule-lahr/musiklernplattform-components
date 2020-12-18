import styled from 'styled-components';

import Button from './Button';

export default styled(Button)`
  font-family: "Brandon Grotesque", sans-serif;
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  background-color: ${(props) => (props.disabled ? props.theme.my.colors.secondaryLight : props.theme.my.colors.secondary)};
  color: ${(props) => (props.disabled ? props.theme.my.colors.accentLight : props.theme.my.colors.accent)};
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
