import axios from 'axios'

export const updateDialogue = (getMessages)=>{
let path = axios.get("http://localhost:4000/get-message")
    return  (dispatch)=>dispatch({type:"USER_MESSAGES", payload:path})
}
