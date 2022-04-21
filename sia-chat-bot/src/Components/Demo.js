import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { updateDialogue } from '../redux/action/script'
import ReactMarkdown from 'react-markdown';

const Demo = () => {
    const [inputValue, setInputValue] = useState("")
    const [botResponse, setBotResponse] = useState(null)
    const [initialState, setInitialState] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        setInitialState([...initialState])

    }, [])

    const handleSubmit = (e) => {
        // getMessages()
        e.preventDefault()
        if (inputValue) {
            setInitialState([...initialState, `me: ${inputValue}`])
            setTimeout(() => getMessages(), 2000)
        }
        dispatch(updateDialogue())

    }

    const getMessages = async () => {
        var bot = botResponse;
        var conversation = [...initialState]
        console.log("gfsfsg", inputValue)
        console.log(bot, conversation)
        try {
            const url = await axios.get("http://localhost:4000/get-message")
                .then(function (response) {
                    // console.log("response", response.data)
                    var res = response.data.filter(v => v.optionName === inputValue)
                    console.log('bot', bot)

                    var user = `me: ${inputValue}`
                    var bot = `bot: ${JSON.stringify(res[0].options)}`
                    conversation.push(user)
                    conversation.push(bot)
                    setInputValue("")
                    setInitialState(
                        conversation
                    )
                    setBotResponse(bot)
                    return bot = response.data
                })
        } catch (e) {
            console.log(e)
        }

    }


    const getValues = () => {
        let values;
        initialState.map(dialogue => {
            console.log("hi", dialogue.replaceAll(':', '.'))
            values = dialogue.replace(/[^\w\s]/gi, '')

        })
        return values
    }

    const resetButton = () => {

        for (let i = 0; i < initialState.length; i++) {
            if (i == 0) {
                setInitialState([initialState[i].p])
            }
        }
        document.getElementById("ptags").style.display = "none"
    }
    return (
        <div className='card'>
            {/* {getValues()} */}
            {/* {console.log('initialState', JSON.stringify(initialState))} */}
            <div className='header'>
                <button className="reset-button" onClick={resetButton}>RESET</button>
                <h1>SIA THE CHATBOT</h1>
                <button className="agent-button" onClick={resetButton}>AGENT</button>
            </div>
            <div className='wrapper'>
                <div id="span_wrapper" style={{ display: "block" }}>

                    <span className='bot user-message' id="spantag1"> Welcome to SIA ChatBot how can I help you?</span>
                    <span className='bot user-message' id="ptag"> I can help you with the following:</span>
                    <span className='bot user-message' id="ptag"> 1. The computer is slow</span>
                    <span className='bot user-message' id="ptag"> 2. The computer does not switch on</span>
                    <span className='bot user-message' id="ptag"> 3. The internet is slow</span>
                    <span className='bot user-message' id="ptag"> 4. Printer is not printing</span>
                    <span className='bot user-message' id="ptag"> 5. The computer is making strange noises</span>
                </div>
                <ul>
                    {initialState.map((chats, index) => {
                        console.log(chats.replaceAll(':', '.'))

                        return (
                            <div key={index}>
                                <div className='dialogue'>
                                    <p className={index % 2 === 0 ? 'client user-message' : 
                                    'bot user-message'} style={{'font-size': 'bold',  display: "flex", "flex-direction": "column"}}>
                                        
                                        
                                        {<ReactMarkdown>{chats.replace(/[\\{""\\}]/gi, '')}</ReactMarkdown>}</p><br /></div>

                                {/* <WaitingMessage onSend{}/> */}

                                {/* <div><p className='client '>{<ReactMarkdown>{inputValue}</ReactMarkdown>}</p><br /></div> */}
                            </div>

                        )
                    })}
                </ul>
            </div>
            <div className='card-container'>
                <input type="text" value={inputValue} placeholder="Response Command"
                    name='chat' onChange={e => setInputValue(e.target.value)} />
                <button onClick={handleSubmit} className="submit">submit</button>
            </div>
        </div>
    )
}

export default Demo