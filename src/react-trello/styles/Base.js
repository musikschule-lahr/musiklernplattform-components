import styled from 'styled-components';

export const BoardWrapper = styled.div`
  background-color: ${(props) => props.theme.my.colors.primary};
  overflow-y: hidden;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  & > div {
    height: 100%;
    & > .smooth-dnd-container {
      height: 100%;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  background-color: ${(props) => (
    props.light ? props.theme.my.colors.secondaryLight : props.theme.my.colors.secondary
  )};
  border-radius: 20px;
  margin: 12px;
  position: relative;
  padding: 12px;
  display: inline-flex;
  flex-direction: column;
`;

export const ScrollableLane = styled.div`
  flex: 1;
  width: 250px;
  overflow-x: hidden;
  overflow-y: visible;
  height: auto;
  align-self: center;
  margin-top: 24px;
  flex-direction: column;
  justify-content: space-between;
  & > .smooth-dnd-container {
    display: flex;
    flex-direction: column;
    & > .smooth-dnd-draggable-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;
/*
export const ScrollableLane = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 250px;
  overflow-x: hidden;
  align-self: center;
  max-height: 90vh;
  margin-top: 24px;
  flex-direction: column;
  justify-content: space-between;
  & > .smooth-dnd-container {
    display: flex;
    flex-direction: column;
    & > .smooth-dnd-draggable-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`;
*/
export const RightContent = styled.span`
  width: 30%;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
`;

export const CardWrapper = styled.article`
  border-radius: 20px;
  background-color: ${(props) => {
    if (props.timetableActive) return props.theme.my.colors.cardTimetableActive;
    if (props.group) return props.theme.my.colors.cardGroupChat;
    if (props.messageType === 'outgoing') return props.theme.my.colors.cardOutgoing;
    if (props.messageType === 'incoming') return props.theme.my.colors.cardIncoming;
    return props.theme.my.colors.card;
  }};
  position: relative;
  padding: 16px;
  cursor: pointer;
  width: ${(props) => {
    if (props.newCardForm) return 'auto';
    return props.messageType !== 'none' ? 80 : 100;
  }}%;
  align-self: ${(props) => (props.messageType === 'outgoing' ? 'flex-end' : 'flex-start')};
  margin-bottom: 12px;
  overflow: visible;
`;

export const MovableCardWrapper = styled(CardWrapper)`
  &:hover {
    background-color: ${(props) => {
    if (props.group) return props.theme.my.colors.cardGroupChatDarkened;
    if (props.timetableActive) return props.theme.my.colors.cardTimetableActiveDarkened;
    return props.theme.my.colors.cardDarkened;
  }};
  }
`;

export const CardHeader = styled(Header)`
  color: ${(props) => props.theme.my.colors.text};
`;

export const CardTitle = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.theme.my.font.sizes.cardTitle};
  line-height: 18px;
`;

export const CardTitleTimetable = styled(CardTitle)`
  font-weight: normal;
`;

export const EditableCardTitle = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.theme.my.font.sizes.cardTitle};
  width: 100%;
  margin-bottom: 8px;
`;

export const CardRightContent = styled(RightContent)`
  font-size: 10px;
`;

export const Detail = styled.div`
  color: ${(props) => props.theme.my.colors.text};
  font-size: ${(props) => props.theme.my.font.sizes.cardContent};
  white-space: pre-wrap;
  font-weight: normal;
`;

export const DetailTimetable = styled(Detail)`
  font-weight: bold;
`;

export const Badge = styled.span`
  position: ${(props) => (props.badgePosition === 'inline' ? 'relative' : 'absolute')};
  right: ${(props) => (props.badgePosition === 'inline' ? 'initial' : 0)};
  top: ${(props) => (props.badgePosition === 'inline' ? 'initial' : 0)};
  display: inline-block;
  background-color: red;
  border-radius: 10rem;
  text-align: center;
  padding: 0 .5em;
`;

export const Footer = styled.div`
  font-size: ${(props) => props.theme.my.font.sizes.cardFooter};
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardForm = styled.div`
  background-color: ${(props) => props.theme.my.colors.card};
`;

export const CardFormFooterWrapper = styled.div`
  display: flex;
  padding: 0 16px 16px;
  justify-content: space-between;
`;

export const Attachements = styled.div`
  align-self: flex-end;
  flex-grow: 1;
`;

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
