import React from 'react';
import LaneHeader from 'react-trello/dist/components/Lane/LaneHeader';

import themes from '../../themes';

function LaneHeaderComponent({ titleStyle, ...props }) {
  return (
    <LaneHeader
      titleStyle={{
        textTransform: 'uppercase',
        fontSize: themes.defaultTheme.font.sizes.h5,
        width: '100%',
        ...titleStyle,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

LaneHeaderComponent.propTypes = LaneHeader.propTypes;

export default LaneHeaderComponent;
