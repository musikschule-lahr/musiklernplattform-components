import styled from 'styled-components';

import DialogHeader from './DialogHeader';

export default styled(DialogHeader)`
  display: flex;
  position: relative;
  padding: 8px;
  min-height: 48px;
  background-color: ${(props) => props.theme.my.colors.secondary};
  text-transform: uppercase;
  h1, h2, h3, h4, h5, h6, p, span {
    margin: auto;
    width: calc(100% - 80px);
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
  }
`;
