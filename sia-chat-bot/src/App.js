import React from 'react';
import { IoSend } from "react-icons/io5";
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {updateDialogue} from './redux/action/script'

const App = () => {

const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState({ message: [], response: [] })
  const [submitInputValue, setSubmitInputValue] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitInputValue([...submitInputValue, inputValue])
    dispatch(updateDialogue())

  }

  const chatBotResponse =  ()=>{

  }

  const userMessages = () =>{
    
  }

  return (
    <div className='card'>
      <h1>Sia The Chat Bot</h1>
      <div className='wrapper'>
 
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
