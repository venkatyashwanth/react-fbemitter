import React from 'react';
import EventEmitter from './utils/EventEmitter';
import { useState, useEffect } from 'react';

export default function LabelComponent() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const onNewLog = (eventData) => {
      setLogs((prevValue) => [...prevValue, eventData]);
    };
    const listener = EventEmitter.addListener('NewLog', onNewLog);

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <div>
      {logs.map((log) => (
        <div key={log.create_at}>{log.text} </div>
      ))}
    </div>
  );
}
