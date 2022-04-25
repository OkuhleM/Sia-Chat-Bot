
const initialState = {
    messagesFromTheUser: [],
    botResponse: []
};



export const updateUserMessage = (state = initialState, action) =>{
 switch(action.type){
     case 'CHATBOT_MESSAGE':
         console.log(action.payload)
     return {...state,botResponse: action.payload}
     case 'CHATBOT_RESPONSES':
     return {...state, messagesFromTheUser: action.payload};
     default:
         return state;
 }
}


