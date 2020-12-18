import styled from 'styled-components';

import ChatLaneContent from './ChatLaneContent';

/*
display: flex;
  flex-direction: row;
  align-items: flex-start;
*/
export default styled(ChatLaneContent)`
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  width:250px;
  align-self: center;
  margin-top: auto;
  display:flex;
  flex-direction:column;
  margin-bottom:24px;
  height: 100%;
`;
