import React from 'react';
import { IoSend } from "react-icons/io5";
import './App.css';
import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState({ message: [], response: [] })
  const [submitInputValue, setSubmitInputValue] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitInputValue(
      [...submitInputValue, inputValue])
  }

  const chatBotResponse =  ()=>{

  }

  const userMessages = () =>{
    
  }

  return (
    <div className='card'>
      <h1>Sia The Chat Bot</h1>
      <div className='wrapper'>
        <p className='chat-bot-message'>Hi, I'm Sia the chatbot, How can I assist you today?</p>
        <p className='chat-bot-message'>Let's start by getting your name first</p>
        <div>
          <ul>{submitInputValue.map((chats, index) => {

            return (
              <div key={index}>
                <div>
                  <p className='user-message'>{chats.chat}</p>

                </div>
              </div>
            )
          })}</ul>
        </div>
        <div className='container'>
          <div className='inner'>
            <div className='card-container'>

              <input type="text" value={inputValue.chat}
                onChange={e => setInputValue({ chat: e.target.value })} name="chat" />
              <div className='icon-container'>
                <IoSend onClick={handleSubmit} className="svg" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
