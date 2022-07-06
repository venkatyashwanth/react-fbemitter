import React from 'react';
import EventEmitter from './utils/EventEmitter';

export default function LinkComponent() {
  const createNewLog = () => {
    EventEmitter.emit('NewLog', {
      text: 'Hi this is yashwanth',
      create_at: new Date(),
    });
  };

  return <div onClick={createNewLog}>Click on me!</div>;
}
