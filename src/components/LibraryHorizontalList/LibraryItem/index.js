import styled from 'styled-components';

import LibraryItem from './LibraryItem';

export default styled(LibraryItem)`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  font-size: 17px;
  cursor: pointer;
  .lib__item-image-wrapper {
    width: ${(props) => props.size || 200}px;
    height: ${(props) => props.size || 200}px;
    > img {
      max-width: ${(props) => props.size || 200}px;
      max-height: ${(props) => props.size || 200}px;
    }
  }
  &:not(:last-child) {
    margin-right: 18px;
  }
  &:last-child {
    position: relative;
  }
  &:last-child::after {
    position: absolute;
    left: 100%;
    height: 1px;
    width: 18px;
    display: block;
    content: '';
  }
  .lib__item-title {
    margin-top: 7px;
    max-width: ${(props) => props.size || 200}px;
    color: ${(props) => props.theme.my.colors.text};
  }
  .lib__item-subtitle {
    margin-top: -4px;
    max-width: ${(props) => props.size || 200}px;
    color: ${(props) => props.theme.my.colors.textSubtitle};
  }
  .lib__item-subtitle, .lib__item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
      text-decoration: underline;
    }
  }
`;
