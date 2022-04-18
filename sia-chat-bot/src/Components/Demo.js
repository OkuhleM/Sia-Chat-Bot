import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { updateDialogue } from '../redux/action/script'
// import { init } from 'create-react-app/createReactApp';

const Demo = () => {
    const [inputValue, setInputValue] = useState("")
    const [botResponse, setBotResponse] = useState({})
    const [initialState, setInitialState] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        // var test =  getMessages()

        setInitialState([...initialState, botResponse])

    }, [])

    const handleSubmit = (e) => {
        // getMessages()
        e.preventDefault()
        if (inputValue) {
            setInitialState([...initialState, `me: ${inputValue}`])
            setTimeout(()=>getMessages(),1000)
        }
        dispatch(updateDialogue())
        // setInitialState([...initialState, botResponse])

    }

    const getMessages = async () => {
        var bot = botResponse;
        var conversation = [...initialState]
        console.log(bot,conversation)
        try {
            const url = await axios.get("http://localhost:4000/get-message")
                .then(function (response) {
                    console.log(response,"response")
                    if (bot === `bot: response.data[2]` && inputValue.length > 0) {
                         return  response.data[0]
                    } else if (inputValue === "1") {
                        bot = `bot: response.data.1`
                    } else {
                        var user = `me: ${inputValue}`
                        conversation.push(user)
                        conversation.push(bot)
                        setInputValue("")
                        setInitialState(conversation)
                        setBotResponse(bot)
                    }
                    setBotResponse([response.data])
                    setInitialState([response.data])
                    return response.data
                })
        } catch (e) {
            console.log(e)
        }
    }
    console.log(initialState, botResponse, inputValue)

    return (
        <div>
            <h1>SIA THE CHATBOT</h1>
            <input type="text" value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
            <ul>
                {initialState.map((chats, index) => {
                    console.log(chats, index)
                    return (
                        <div key={index}>
                            <div>
                                {chats.data ?
                                    <div>
                                        <p className='bot user-message'>{chats.subOption}</p><br /></div>
                                    :
                                    <div><p className='client user-message'>{chats.inputValue}</p><br /></div>
                                }
                            </div>
                            

                            {/* <p>{chats.data}</p>  */}
                             {/* <p>{chats.inputValue}</p>
                            <p>{chats.subOption}</p>  */}


                        </div>
                    )
                })}
            </ul>

        </div>
    )
}

export default Demo