import styled from 'styled-components';

export const Detail = styled.div`
`;

export const CardWrapper = styled.div`
  border-radius: 20px;
  background-color: ${(props) => {
    if (props.messageType === 'outgoing') return props.theme.my.colors.cardOutgoing;
    if (props.messageType === 'incoming') return props.theme.my.colors.cardIncoming;
    return props.theme.my.colors.card;
  }};
  position: relative;
  padding: 16px;
  width: 65%;
  align-self: ${(props) => {
    if (props.messageType === 'outgoing') return 'flex-end';
    return 'flex-start';
  }};
  max-height: auto;
  height: auto;
  color: ${(props) => props.theme.my.colors.text};
  text-align: left;
  margin-top: 12px;
  margin-bottom: 12px;
  overflow: visible;
`;

export const Badge = styled.span`
  display: inline-block;
  background-color: red;
  border-radius: 10rem;
  text-align: center;
  padding: 0 .5em;
`;

export const Footer = styled.div`
  font-size: ${(props) => props.theme.my.font.sizes.cardFooter};
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
// padding-top: 8px;

export const Infos = styled.div`
  align-self: flex-end;
  text-align: right;
  flex-grow: 1;
  & > p {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }
`;
export const Author = styled.span`
  font-size: ${(props) => props.theme.my.font.sizes.cardFooter};
  width:100%;
  display: inline-flex;
`;
