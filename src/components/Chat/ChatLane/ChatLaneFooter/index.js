import styled from 'styled-components';

import ChatLaneFooter from './ChatLaneFooter';

export default styled(ChatLaneFooter)`
  font-family: "Brandon Grotesque",sans-serif;
  color: ${(props) => props.theme.my.colors.text};
  display:flex;
  flex-direction:row;
  margin-top:auto;
  
  input {
    border-radius: 15px;
  }
  button{
    align-self: center;
    margin-left:auto;
    margin-right:auto;
  }
`;
