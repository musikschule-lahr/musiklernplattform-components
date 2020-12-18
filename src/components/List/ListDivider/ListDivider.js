import React from 'react';
import PropTypes from 'prop-types';

/**
 * List divider.
 *
 * Sticky by default.
 */
function ListDivider({
  label,
  className,
}) {
  return (
    <li className={`my-list-divider ${className}`}>
      <span>{label}</span>
    </li>
  );
}

ListDivider.defaultProps = {
  className: '',
  sticky: true,
};

ListDivider.propTypes = {
  className: PropTypes.string,
  /**
   * Label or content of the divider element.
   */
  label: PropTypes.node.isRequired,
  /**
   * Divider stickiness.
   */
  // eslint-disable-next-line react/no-unused-prop-types
  sticky: PropTypes.bool,
};

export default ListDivider;
