import React, { useState, useEffect, useRef } from 'react';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  const [messageSender, setMessageSender] = useState('patient');
  const [userName, setUserName] = useState('');
  const [doctorStatus, setDoctorStatus] = useState('busy');
  const chatInputRef = useRef(null);

  const createChatMessageElement = (message) => (
    <div className={`message ${message.sender === 'patient' ? 'blue-bg' : 'gray-bg'}`} key={message.timestamp}>
      <div className="message-sender">{message.sender}</div>
      <div className="message-text">{message.text}</div>
      <div className="message-timestamp">{message.timestamp}</div>
      {message.sender === 'patient' && !message.read && <div className="message-status">Sent</div>}
    </div>
  );

  useEffect(() => {
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, [messages]);

  const updateMessageSender = (name) => {
    setMessageSender(name);

    /* Update messages in local storage */
    localStorage.setItem('messages', JSON.stringify(messages));

    /* Scroll to bottom of chat messages */
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight;

    /* Send a welcome message */
    const welcomeMessage = {
      sender: name,
      text: `Welcome, ${name}! How can I assist you today?`,
      timestamp: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
      read: false,
    };

    setMessages([...messages, welcomeMessage]);

    if (name === 'Doctor') {
      setTimeout(() => {
        const doctorResponse = {
          sender: 'Doctor',
          text: 'Hello! How can I assist you today Once Doctor be free it will reply soon',
          timestamp: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
          read: false,
        };
        setMessages([...messages, doctorResponse]);
        setDoctorStatus('available'); // Set doctor status to available after sending response
      }, 3000); // Simulated delay of 3 seconds
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() !== '') {
      updateMessageSender(userName);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const messageText = chatInputRef.current.value.trim();

    if (messageText === '') {
      return; // Don't send empty messages
    }

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const message = {
      sender: messageSender,
      text: messageText,
      timestamp,
      read: false, // Set message as unread initially
    };

    setMessages([...messages, message]);
    chatInputRef.current.value = ''; // Clear input field

    if (messageSender === 'patient' && doctorStatus === 'available') {
      setDoctorStatus('busy'); // Set doctor status to busy when patient sends a message
      setTimeout(() => {
        const doctorResponse = {
          sender: 'Doctor',
          text: 'I am currently busy. I will get back to you as soon as possible.',
          timestamp: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
          read: false,
        };
        setMessages([...messages, doctorResponse]);
        setDoctorStatus('available'); // Set doctor status to available after sending response
      }, 5000); // Simulated delay of 5 seconds
    }
  };

  const clearChat = () => {
    localStorage.clear();
    setMessages([]);
  };
  const chatStyle ={
    paddingTop: '50px',
  }

  return (
    <div className='main' style={chatStyle}> 
      <div className="person-selector">
        {messageSender === 'patient' ? (
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <button
            className="button person-selector-button active-person"
            onClick={() => updateMessageSender(userName)}
          >
            {userName}
          </button>
        )}
      </div>
      <div className="chat-container">
        <h2 className="chat-header">{messageSender} chatting...</h2>
        <div className="chat-messages">{messages.map((message) => createChatMessageElement(message))}</div>
        <form className="chat-input-form" onSubmit={sendMessage}>
          <input
            type="text"
            className="chat-input"
            required
            placeholder={`Type here, ${messageSender}...`}
            ref={chatInputRef}
            disabled={messageSender === 'patient'}
          />
          <button type="submit" className="button send-button" disabled={messageSender === 'patient'}>
            Send
          </button>
        </form>
        <button className="button clear-chat-button" onClick={clearChat}>
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default ChatApp;