import styled from 'styled-components';

import Teaser from './Teaser';

export default styled(Teaser)`
  cursor: pointer;
  width: 300px;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.my.font.body1};
  @media only screen and (max-width: 1200px) {
    width: 280px;
  }
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;
