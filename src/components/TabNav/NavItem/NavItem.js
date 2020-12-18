import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItemContent = styled.div`
  margin-left:auto;
  margin-right:auto;
`;
/**
 * Tabnav NavItem
 */
function Navitem({
  className,
  children,
  onClickHandler,
  active,
}) {
  return (
    <li
      role="menuitem"
      className={`my-tabnav-item ${className}`}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      active={active.toString()}
    >
      <NavItemContent>
        {children}
      </NavItemContent>
    </li>
  );
}

Navitem.defaultProps = {
  className: '',
  onClickHandler: () => {},
  active: false,
};

Navitem.propTypes = {
  className: PropTypes.string,
  /**
   * Children of the navitem item.
   */
  children: PropTypes.node.isRequired,
  onClickHandler: PropTypes.func,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Navitem;
