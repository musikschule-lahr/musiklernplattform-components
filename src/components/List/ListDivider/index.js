import styled from 'styled-components';

import ListDivider from './ListDivider';

export default styled(ListDivider)`
  position: ${(props) => props.sticky};
  top: 0;
  transform: translateZ(0);
  height: 24px;
  line-height: 24px;
  padding: 4px 16px;
  color: ${(props) => props.theme.my.colors.textTransparent};
  background-color: ${(props) => props.theme.my.colors.secondary};
  font-size: ${(props) => props.theme.my.font.sizes.body1};
`;
