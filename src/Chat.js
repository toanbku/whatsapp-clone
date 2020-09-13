import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import './Chat.css';
import axios from './axios';

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      "message": input,
      "name": "Toan Ho",
      "timestamp":  new Date().toUTCString(),
      "received": false
    });

    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
      {messages.map(message => (
        <p className={`chat__message ${message.received && "chat__receiver"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">
            {message.timestamp}
          </span>
        </p>
      ))}
      </div>
    
      <div className="chat__footer">
        <IconButton>
          <EmojiEmotionsOutlinedIcon />
        </IconButton>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
          <MicNoneOutlinedIcon />
        </form>
      </div>
    </div>
  )
}

export default Chat
