import React from 'react';

import ChatDateIndicator from './index';

export default {
  component: ChatDateIndicator,
  title: 'ChatDateIndicator',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    <ChatDateIndicator messageType="datetime" description="Di, 12. Jan." />
  </div>
);
