
import axios from "axios";
import React, { useState } from "react";

function ButtonMessages() {
    
  const [messagesButton, setMessagesButton] = useState([]);
  const [messageRecieved, setMessagesReceived] = useState([]);
  const [valueEntered, setValueEntered] = useState(null);

  // const  = async (e) => {
  //   const conversation = [...messageRecieved];
  //   try {
  //     const path = await axios.get("http://localhost:4000/get-button-messages");
  //     const user = `me: ${messagesButton}`;
  //     conversation.push(path);
  //     conversation.push(user);
  //     setMessagesButton(JSON.stringify(conversation, null, 2));
  //     setMessagesReceived([...messageRecieved, messagesButton]);
      
  //     console.log('conversation', conversation.data)
  //     if (valueEntered === path) {
  //       setMessagesReceived([path.data, messageRecieved]);
  //       setValueEntered([...valueEntered, messageRecieved]);
  //     }
  //     return path.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleFetchMessages = async (e) => {
    console.log(e.target.value)
    var conversation = [...messageRecieved];
  await axios
      .get("http://localhost:4000/get-button-messages")
      .then(function (response) {
        // var res = response.data.filter((v) => v.optionName === inputValue);
   const user = `me: ${messagesButton}`;
   conversation.push(user)
  console.log('path',response.data)
console.log('conversation', conversation)
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
    if (messagesButton) {
      //   setInitialState([...initialState, `me: ${messagesButton}`]);
      setTimeout(() => handleFetchMessages(), 1000);
    }
  };

  return (
    <div>
      <div>
        <ul>
          {messageRecieved.map((dialogue, index) => {
            console.log("dialogue", dialogue);
            return (
              <div key={index}>
                <p>{dialogue.data}</p>
              </div>
            );
          })}
        </ul>
      </div>
      <input
        type="button"
        className="bot-message"
        onClick={handleClick}
        value={"1.I can't login"}
        id="ptag"
      />{" "}
      <br />
      <input
        type="button"
        className="bot-message"
        onClick={handleClick}
        value="2.The system is down"
        id="ptag"
      />{" "}
      <br />
      <input
        type="button"
        className="bot-message"
        onClick={handleClick}
        value="3.I have problems with Java"
        id="ptag"
      />{" "}
      <br />
      <input
        type="button"
        className="bot-message"
        onClick={handleClick}
        value="4. Printer is not printing"
        id="ptag"
      />{" "}
      <br />
      <input
        type="button"
        className="bot-message"
        onClick={handleClick}
        value="5.The computer does not switch on"
        id="ptag"
      />{" "}
    </div>
  );
}

export default ButtonMessages;
