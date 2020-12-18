import styled from 'styled-components';

import ToggleSwitch from './ToggleSwitch';

export default styled(ToggleSwitch)`
  background-color: ${(props) => (
    props.checked ? props.theme.my.colors.green : 'white'
  )};
  border: 1px solid ${(props) => (
    props.checked ? props.theme.my.colors.green : props.theme.my.colors.lightBorder
  )};
  border-radius: 15px;
  box-shadow: inset 0 0 0 33px ${(props) => (
    props.checked ? props.theme.my.colors.green : props.theme.my.colors.lightBorder
  )};
  box-sizing: border-box;
  display: inline-block;
  height: 30px;
  width: 50px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  position: relative;
  transition: 0.2s;
  user-select: none;
  outline: none;
`;
