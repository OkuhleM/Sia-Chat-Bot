import React from 'react';
import { FaRobot } from "react-icons/fa";
import './App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateDialogue } from './redux/action/script'

const App = () => {

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')
  const [chatbotResponse, setChatbotResponse] = useState("bot: What is your name?");
  const [dialogue, setDialogue] = useState([]);

  useEffect(() => {
    setDialogue([...dialogue, chatbotResponse])
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {

      setDialogue([...dialogue, `me: ${inputValue}`])
      setTimeout(() => botResponse(), 2000)

    }
    dispatch(updateDialogue())

  }


  const botResponse = () => {
    var bot = chatbotResponse;
    var conversation = [...dialogue]

    if (bot === "bot: What is your name?" && inputValue.length > 0) {
      console.log("hi", inputValue)
      bot = `bot: Hi, ${inputValue}\nI can offer help with the following:
      \nopt1: The computer is slow 
      \nopt2: The computer does not switch on 
      \nopt3: The internet is slow `

    } else if (inputValue === "opt1") {
      bot = "bot: 1.shut it down and restart it \n 2. Delete duplicate and junk files \n 3. store data on an external disk or in your icloud storage"
    } else if (inputValue === "opt2") {
      bot = `bot: 1. check if the power is plugged \n 
      2. check if electricity can reach the power socket \n 
      3. try a different power source 4.check your monitor connection \n
      4. unplug USB devices `
    } else if (inputValue === "opt3") {
      bot = `bot: 1.restart the modem \n
      2. fix your wifi signal \n
      3. kill any unwanted background software`
    }else if(inputValue !== ""){
      bot = "if problem persist click the agent button to be redirected to our agent"
    }
    var user = `me: ${inputValue}`
    conversation.push(user)
    conversation.push(bot)
    setInputValue("")

    setDialogue(
      conversation
    )
    setChatbotResponse(bot)
  }

  const reset = () => {
console.log("erased",dialogue,inputValue)
console.log(chatbotResponse)
setDialogue(
 [ ...dialogue]
)
  }

  return (
    <div className='card'>
      
      <h1>Sia The Chat Bot</h1>
      <div className='button-container'>

        <div className='reset-button'>
          <button onClick={reset}>RESET</button>
        </div>
        <div className='agent'>
          <button>AGENT</button>
        </div>
      </div>
      <div className='wrapper'>
        <div>

          <ul>{dialogue.map((chats, index) => {

            return (
              <div key={index}>
                <div>

                  {chats.match("bot") ?


                    <div>
                      <p className='bot user-message'>{chats}</p><br /></div>
                    :
                    <div><p className='client user-message'>{chats}</p><br /></div>
                  }
                </div>
              </div>
            )
          })}</ul>
        </div>
        <div className='container'>
          <div className='inner'>
          </div>

        </div>
      </div>
      <div className='card-container'>

        <input type="text" value={inputValue}
          onChange={e => setInputValue(e.target.value)} name="chat" />
        <button onClick={handleSubmit} className="submit">Send</button>

      </div>
    </div>
  );
}

export default App;
