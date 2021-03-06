import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateDialogue } from "../redux/action/script";
import ReactMarkdown from "react-markdown";
import ButtonMessages from "./ButtonMessages";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [botResponse, setBotResponse] = useState(null);
  const [initialState, setInitialState] = useState([]);

  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue) {
      setInitialState([...initialState, `me: ${inputValue}`]);
      setTimeout(() => getMessages(), 1000);
    }
  };

  const getMessages = async () => {
    var conversation = [...initialState];

    const url = await axios
      .get("http://localhost:4000/get-message")
      .then(function (response) {
        var res = response.data.filter((v) => v.optionName === inputValue);

        var user = `me: ${inputValue}`;
        var bot = `bot: ${JSON.stringify(res[0].options)}`;
        conversation.push(user);
        conversation.push(bot);
        setInputValue("");
        setInitialState(conversation);
        dispatch(updateDialogue(conversation));

        setBotResponse(bot);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetButton = () => {
    for (let i = 0; i < initialState.length; i++) {
      if (i == 0) {
        setInitialState([initialState[i]]);
      }
    }
    document.getElementById("span_wrapper").style.display = "none";
  };
  return (
    <div className="card">
      <div className="header">
        <button className="reset-button" onClick={resetButton}>
          RESET
        </button>
        <h1>SIA THE CHATBOT</h1>
        <button className="agent-button" onClick={resetButton}>
          AGENT
        </button>
      </div>
      <div className="wrapper">
        <div id="span_wrapper" style={{ display: "block" }}>
          <span className="bot user-message" id="spantag1">
            {" "}
            Welcome to SIA ChatBot, how can I help you?
          </span>
          <span className="bot user-message" id="ptag">
            {" "}
            I can help you with the following:
          </span>
      
          {/* <button>1. I can't login</button>{" "}
          <br />
          <button>2.The system is down</button>{" "}
          <br />
          <button>3.I have problems with Java</button>{" "}
          <br />
          <button>4. Printer is not Printing</button>{" "}
          <br />
          <button>5. The computer does not switch on</button>{" "} */}
        </div>
      <div>
        <ButtonMessages />
      </div>
        <ul>
          {initialState.map((chats, index) => {
            return (
              <div key={index}>
                <div className="dialogue">
                  <p
                    className={
                      index % 2 === 0
                        ? "client user-message"
                        : "bot user-message"
                    }
                    style={{ fontSize: "bold", width: "fit-content" }}
                  >
                    {
                      <ReactMarkdown>
                        {chats.replace(/[\\{""\\}]/gi, "")}
                      </ReactMarkdown>
                    }
                  </p>
                  <br />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="card-container">
        <input
          type="text"
          value={inputValue}
          placeholder="Response Command"
          name="chat"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit} className="submit">
          submit
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
