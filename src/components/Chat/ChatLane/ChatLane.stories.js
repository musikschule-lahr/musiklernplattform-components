import React, { useState, useEffect } from 'react';

import ChatLane from './index';
import ChatRoomCard from '../ChatRoomCard';
import ChatCard from '../ChatCard';
import ChatLaneContent from './ChatLaneContent';

export default {
  component: ChatLane,
  title: 'ChatLane',
  excludeStories: /.*Data$/,
};
const onClickFunction = (event) => {
  console.log('clicked', event);
};
export const Default = () => (
  <ChatLane showMessageField heading="Pauline Schimmel">
    <ChatCard messageType="outgoing" description="Wann ist das?" time="12:22" />
    <ChatCard messageType="incoming" description="Heute..." time="12:23" />
  </ChatLane>
);
export const RoomLane = () => (
  <ChatLane isRoomList heading="Neue Nachrichten">
    <ChatRoomCard roomType="direct" title="Pauline Schimmel" onClickHandler={onClickFunction} />
    <ChatRoomCard roomType="direct" title="SehrLangerNameLangSeeeeeeeeeeeeeeeeeeeeehrLaaaaaaaaaaaaaaaaang" attachementCount={1} onClickHandler={onClickFunction} />
    <ChatRoomCard roomType="group" title="Orchester" onClickHandler={onClickFunction} />
    <ChatRoomCard roomType="other" title="Schwarzes Brett" onClickHandler={onClickFunction} />
    <ChatRoomCard roomType="direct" title="Pauline Schimmel" attachementCount={1} onClickHandler={onClickFunction} />
    <ChatRoomCard roomType="group" title="Orchester" attachementCount={2} onClickHandler={onClickFunction} />
    <ChatRoomCard roomType="other" title="Schwarzes Brett" attachementCount={3} onClickHandler={onClickFunction} />
  </ChatLane>
);
export const InSameChatLane = () => (
  <ChatLane
    showMessageField
    heading="Maria Mustermann"
    childrenIsChatLaneContent
  >
    <ChatLaneContent>
      <ChatCard messageType="outgoing" description="Wann ist das?" time="12:22" />
      <ChatCard messageType="incoming" description="Heute..." time="12:23" />
    </ChatLaneContent>
    ,
  </ChatLane>
);
