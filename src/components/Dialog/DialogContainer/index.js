import styled from 'styled-components';

import DialogContainer from './DialogContainer';

export default styled(DialogContainer)`
  margin: auto;
  overflow: hidden;
  overflow-y: auto;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.theme.my.colors.primary};
  border-radius: 10px;
  z-index: 1100;
  max-height: 90%;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
