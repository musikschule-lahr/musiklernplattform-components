import styled from 'styled-components';

import RecordFile from './RecordFile';

export default styled(RecordFile)`
  background-color: ${(props) => props.theme.my.colors.secondary};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.28);
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  margin: 8px;
  color: white;
  position: relative;
  font-size: ${(props) => props.theme.my.font.sizes.cardFooter};
  display: flex;
  flex-direction: column;
  user-select: none;
  outline: none;
`;
