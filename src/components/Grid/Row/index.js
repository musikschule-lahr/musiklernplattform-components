import styled from 'styled-components';

import Row from './Row';
import breakpoints from '../../../breakpoints';

export default styled(Row)`
  display: flex;
  flex-direction: row;
  ${(props) => props.breakpoint && breakpoints[props.breakpoint](`
    flex-direction: column;
  `)}
`;
