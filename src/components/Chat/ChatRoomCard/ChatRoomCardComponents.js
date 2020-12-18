import styled from 'styled-components';

export const Detail = styled.div`
width:85%;
`;

export const CardWrapper = styled.div`
  border-radius: 20px;
  background-color: ${(props) => {
    if (props.roomType === 'group') return props.theme.my.colors.cardGroupChat;
    return props.theme.my.colors.card;
  }};
  font-weight: bold;
  padding: 16px;
  min-width:80%;
  width: 200px;
  max-width: 200px;
  text-overflow: ellipsis;
  align-self: center;
  color:  ${(props) => props.theme.my.colors.chatRoom};
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: visible;
  font-size: ${(props) => props.theme.my.font.sizes.h5};
  display:flex;
  flex-direction:row;
  div:first-child{
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .roomDetail_hasAttachementCount{
    max-width: calc(100% - 0.5em);
  }
`;
export const UnreadCount = styled.div`
  width:15%;
  text-align:right;
`;
export const Badge = styled.span`
 
  right: ${(props) => (props.badgePosition === 'inline' ? 'initial' : 0)};
  display: inline-block;
  background-color: ${(props) => {
    if (props.roomType === 'other') return props.theme.my.colors.chatRoomBadgeOther;
    return props.theme.my.colors.chatRoomBadge;
  }};
  border-radius: 10rem;
  text-align: center;
  padding: 0 .5em;
`;
