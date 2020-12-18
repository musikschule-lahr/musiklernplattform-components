import styled from 'styled-components';

import LibraryHorizontalList from './LibraryHorizontalList';

export default styled(LibraryHorizontalList)`
  display: flex;
  width:100%;
  overflow-x: scroll;
  padding: 18px;
  padding-left: 0px;
  list-style: none;
  flex-direction: row;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/*
export default styled(LibraryHorizontalList)`
  display: flex;
  overflow-x: scroll;
  padding: 16px;
  list-style: none;
  flex-direction: row;
  overscroll-behavior: contain;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
*/
