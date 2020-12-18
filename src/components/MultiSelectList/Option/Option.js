import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InlineIcon } from '@iconify/react';
import OutlineIcon from '@iconify/icons-ion/ellipse-outline';
import CheckmarkIcon from '@iconify/icons-ion/checkmark-circle';

const ListOptionContent = styled.div`
  margin-left: 16px;
  text-align: left;
  width: calc(100% - 24px);
  word-wrap: break-word;
  padding: 13px 0;
`;

const InlineMarkerIcon = styled(InlineIcon)`
  color: ${(props) => (props.selected ? props.theme.my.colors.accent : 'inherit')};
  font-size: 24px;
  min-width:24px;
  transition: color .2s ease;
`;

/**
 * Multi Select List Option
 */
function Option({
  className,
  children,
  selected,
  onClickHandler,
}) {
  return (
    <li
      role="menuitem"
      className={`my-multi-option-item ${className}`}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
    >
      <InlineMarkerIcon
        selected={selected}
        icon={selected ? CheckmarkIcon : OutlineIcon}
        style={{ transform: 'translate: none' }}
      />
      <ListOptionContent>
        {children}
      </ListOptionContent>
    </li>
  );
}

Option.defaultProps = {
  className: '',
  selected: false,
  onClickHandler: () => {},
};

Option.propTypes = {
  className: PropTypes.string,
  /**
   * Children of the option item.
   */
  children: PropTypes.node.isRequired,
  /**
   * Selected flag
   */
  selected: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default Option;
