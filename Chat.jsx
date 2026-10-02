import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Muraho! Murakaza neza kuri Waxtix.", mine: false, time: "10:00 AM" }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), text: inputText, mine: true, time: "Now" }
    ]);
    setInputText('');
  };

  return (
    <div className="waxtix-chat">
      <div className="chat-header">
        <div className="chat-avatar">W</div>
        <div className="chat-user-info">
          <div className="chat-user-name">Waxtix Support</div>
          <div className="chat-status">
            <span className="online-dot"></span> Online
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message-row ${msg.mine ? 'message-row-mine' : 'message-row-theirs'}`}
          >
            <div className={`chat-message ${msg.mine ? 'message-mine' : 'message-theirs'}`}>
              <div className="message-content">{msg.text}</div>
              <div className="message-time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <textarea 
          placeholder="Andika ubutumwa..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="send-button" onClick={handleSend}>
          ➔
        </button>
      </div>
    </div>
  );
};

export default Chat;
    
