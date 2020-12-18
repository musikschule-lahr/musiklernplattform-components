import styled from 'styled-components';

import ChatLane from './ChatLane';

export default styled(ChatLane)`
  height: 100%;
  width:auto;
  font-family: "Brandon Grotesque";
  color: ${(props) => props.theme.my.colors.text};
  & > section {
    background-color: ${(props) => {
    if (props.isRoomList) {
      return props.theme.my.colors.secondary;
    }
    return props.theme.my.colors.secondaryLight;
  }};
    border-radius: 20px;
    margin: 12px;
    padding: 12px;
    position: relative;
    display: inline-flex;
    height: 90%;
    max-height: 90%;
    flex-direction: column;
  }
`;
