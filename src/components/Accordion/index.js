import styled from 'styled-components';

import Accordion from './Accordion';

export default styled(Accordion)`
  color: ${(props) => props.theme.my.colors.text};
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  & + .my-accordion {
    border-top: 1px solid ${(props) => props.theme.my.colors.lightBorder};
  }
`;
