import React from 'react';

import ChatRoomCard from './index';

export default {
  component: ChatRoomCard,
  title: 'ChatRoomCard',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    <ChatRoomCard roomType="direct" title="Pauline Schimmel" />
    <ChatRoomCard roomType="group" title="Orchester" />
    <ChatRoomCard roomType="other" title="Schwarzes Brett" />
    <ChatRoomCard roomType="direct" title="Pauline Schimmel" attachementCount={1} />
    <ChatRoomCard roomType="group" title="Orchester" attachementCount={2} />
    <ChatRoomCard roomType="other" title="Schwarzes Brett" attachementCount={3} />
  </div>
);
