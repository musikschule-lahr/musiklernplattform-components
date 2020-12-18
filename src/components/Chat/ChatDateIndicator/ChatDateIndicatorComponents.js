import styled from 'styled-components';

export const Detail = styled.div`
`;

export const CardWrapper = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.my.colors.chatCardDatetime};
  position: relative;
  padding: 5px;
  width: auto;
  align-self: center;
  max-height: 24px;
  height: 24px;
  color: ${(props) => props.theme.my.colors.accent};
  text-align: center;
  margin-top: 12px;
  margin-bottom: 12px;
  overflow: visible;
  font-size: ${(props) => props.theme.my.font.sizes.cardFooter};
  line-height:24px;
`;
