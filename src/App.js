import React, { useEffect } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  useEffect(() => {
    const pusher = new Pusher('5edfc75639f0fa5977fb', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
