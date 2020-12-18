import styled from 'styled-components';

export default styled.input`
  height: 38px;
  padding-left: 16px;
  padding-right: ${(props) => (props.clearButton ? 24 : 16)}px;
  border: none;
  color: ${(props) => props.theme.my.colors.text};
  background-color: ${(props) => props.theme.my.colors.secondary};
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  outline: ${(props) => (
    props.error
      ? `1px solid ${props.theme.my.colors.error}`
      : 'medium invert'
  )};
`;
