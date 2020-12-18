import styled from 'styled-components';

import Dialog from './Dialog';

export default styled(Dialog)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 1100;
  color: ${(props) => props.theme.my.colors.text};
`;
