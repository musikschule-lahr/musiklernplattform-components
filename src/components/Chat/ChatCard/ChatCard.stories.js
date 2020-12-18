import React from 'react';

import ChatCard from './index';

export default {
  component: ChatCard,
  title: 'ChatCard',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    <ChatCard author="Frau Bühler" messageType="outgoing" description="Wann ist das?" time="12:22" />
    <ChatCard author="Maria Müller" messageType="incoming" description="Heute..." time="12:23" />
  </div>
);
