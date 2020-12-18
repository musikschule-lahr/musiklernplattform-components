import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TeaserCover = styled.div`
  width: 100%;
  height: 225px;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center center;
  border-radius: 20px;
  @media only screen and (max-width: 1200px) {
    height: 210px;
  }
`;

const TeaserTitle = styled.span`
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
  color: ${(props) => props.theme.my.colors.text};
`;

const TeaserSubtitle = styled.span`
  text-align: center;
  color: ${(props) => props.theme.my.colors.textLight};
`;

function Teaser({
  className,
  onClick,
  cover,
  title,
  subtitle,
}) {
  return (
    <div
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <TeaserCover cover={cover} />
      <TeaserTitle>{title}</TeaserTitle>
      <TeaserSubtitle>{subtitle}</TeaserSubtitle>
    </div>
  );
}

Teaser.defaultProps = {
  className: '',
  onClick: () => {},
  subtitle: '',
};

Teaser.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Cover image source
   */
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Teaser;
