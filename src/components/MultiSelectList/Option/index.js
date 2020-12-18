import styled from 'styled-components';

import Option from './Option';

export default styled(Option)`
  display: flex;
  align-items: center;
  min-height: 44px;
  line-height: 1rem;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.my.colors.text};
  font-size: ${(props) => props.theme.my.font.sizes.body1};
  &:hover, &:focus {
    background-color: ${(props) => props.theme.my.colors.primaryHover};
  }
  & + .my-multi-option-item {
    border-top: 1px solid ${(props) => props.theme.my.colors.lightBorder};
  }
`;
