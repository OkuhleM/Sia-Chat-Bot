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
            setTimeout(() => console.log("..."),
            getMessages(), 1000)
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


    const getValues = () =>{
        let values;
        console.log("hi",initialState)
        initialState.map(dialogue=>{
            console.log('dialogue', JSON.stringify(dialogue,null,0))})
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
            {getValues()}
            {/* {console.log('initialState', JSON.stringify(initialState))} */}
            <div className='header'>
            <button className="reset-button" onClick={resetButton}>RESET</button>
            <h1>SIA THE CHATBOT</h1>
            <button className="agent-button" onClick={resetButton}>AGENT</button>
            </div>
            <div className='wrapper'>
                <div id="ptags" style={{ display: "block" }}>

                    <p className='bot user-message'> Welcome to SIA ChatBot how can I help you?</p>
                    <p className='bot user-message'> I can help you with the following:</p>
                    <p className='bot user-message'> 1. The computer is slow</p>
                    <p className='bot user-message'> 2. The computer does not switch on</p>
                    <p className='bot user-message'> 3. The internet is slow</p>
                    <p className='bot user-message'> 4. Printer is not printing</p>
                    <p className='bot user-message'> 5. The computer is making strange noises</p>
                </div>
                <ul>
                    {initialState.map((chats, index) => {
                        console.log(chats[index])
                        return (
                            <div key={index}>
                                <div>
                                    <p className='bot user-message'>{<ReactMarkdown>{chats}</ReactMarkdown>}</p><br /></div>
{/* <WaitingMessage onSend{}/> */}

                                <div><p className='client user-message'>{<ReactMarkdown>{chats}</ReactMarkdown>}</p><br /></div>
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