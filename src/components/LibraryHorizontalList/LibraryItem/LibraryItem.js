import React from 'react';
import PropTypes from 'prop-types';

/**
 * Library Item containing cover image and title + composer.
 */
function LibraryItem({
  className,
  title,
  subtitle,
  cover,
  // eslint-disable-next-line no-unused-vars
  size,
  onClickHandler,
}) {
  return (
    <li
      role="menuitem"
      key={title}
      className={className}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
    >
      <div className="lib__item-image-wrapper">
        <img src={cover} alt={title} />
      </div>
      <span className="lib__item-title">{title}</span>
      <span className="lib__item-subtitle">{subtitle}</span>
    </li>
  );
}

LibraryItem.defaultProps = {
  className: '',
  subtitle: null,
  size: 200,
  onClickHandler: () => {},
};

LibraryItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cover: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClickHandler: PropTypes.func,
};

export default LibraryItem;
