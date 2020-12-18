import styled from 'styled-components';

import ChatLaneHeader from './ChatLaneHeader';

/*
display: flex;
  flex-direction: row;
  align-items: flex-start;
*/
export default styled(ChatLaneHeader)`
  font-family: "Brandon Grotesque",sans-serif;
  color: ${(props) => props.theme.my.colors.text};
  margin-left:-17px;
  margin-right:-17px;
  padding: 0 5px;

  .chat-lane-header__ordinary-heading {
    text-transform: uppercase;
    font-size: 19px;
    width: 100%;
    font-weight: bold;
    line-height: 18px;
    margin-left:17px;
    margin-right:17px;
    
  }
  .chat-lane-header{
    width:100%;
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.my.colors.cardOutgoing};
  }
  button {
    position:absolute;
    top:13px;
    left:13px;
  }
  .chat-lane-header__divider-heading{
    text-align: center;
    margin-bottom: 12px;
    overflow: visible;
    line-height:24px;
  }

  .chat-lane-header__divider-heading > span{
    background-color: ${(props) => props.theme.my.colors.cardOutgoing};
    border-radius: 20px;
    padding: 5px 10px;
    max-height: 24px;
    height: 24px;
    font-size: ${(props) => props.theme.my.font.sizes.cardFooter};
   }
`;
