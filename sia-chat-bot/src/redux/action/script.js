import axios from 'axios';
import {CHATBOT_MESSAGE} from '../actionTypes/script'

export const updateDialogue = (botDialogue)=>{

console.log("hi",botDialogue)

    return  (dispatch)=>dispatch({type:CHATBOT_MESSAGE, payload:botDialogue})
}
