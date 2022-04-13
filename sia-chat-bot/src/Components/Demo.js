import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';

const Demo = () => {
    const [initialState, setInitialState] = useState([]);
    const [botResponse, setBotResponse] = useState({})
    const dispatch = useDispatch()

    // useEffect(() => {
    //     setBotResponse([...initialState, botResponse])

    // }, [])

    const handleSubmit = (e) => {
        
        getMessages()
        e.preventDefault()
        if (botResponse.length > 0) {
            setInitialState([...initialState, botResponse])
        }

    }

    const getMessages = async () => {
        try {
            const url = await axios.get("http://localhost:4000/get-message")
                .then(function (response) {
                    setBotResponse(response.data)
                    return response.data
                })
        } catch (e) {
            console.log(e)
        }
    }
    console.log("hello",botResponse,initialState)


    return (
        <div>
            <h1>SIA THE CHATBOT</h1>
            <button onClick={handleSubmit}>submit</button>
            <ul>
                {initialState.length>0 && initialState.map((chats, index) => {
                    console.log(chats.id,index)
                    return (
                        < div key={index}>
                            <p>{chats.id}</p>
                            <p>{chats.subOption}</p>
                       

                        </div>
                    )
                })}
            </ul>

        </div>
    )
}

export default Demo