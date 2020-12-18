import styled from 'styled-components';

import TabNav from './TabNav';

export default styled(TabNav)`
  font-family: "Brandon Grotesque", sans-serif;
  font-weight: bold;
  height: 45px;
  width: 100%;
  min-width: 100%;
  overflow: hidden;
  font-size: ${(props) => props.theme.my.font.sizes.navItem};
  background-color: ${(props) => props.theme.my.colors.secondary};
  color: ${(props) => (props.theme.my.colors.textLight)};
  & > ul {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
  }
`;
