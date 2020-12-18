import React from 'react';
import PropTypes from 'prop-types';

/**
 * Basic TabNav Component.
 */
function TabNav({
  className,
  children,
}) {
  return (
    <div className={className}>
      <ul>{children}</ul>
    </div>

  );
}

TabNav.defaultProps = {
  className: '',
};

TabNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TabNav;
