
const initialState = {
    messagesFromTheUser: [],
    botResponse: {}
};



export const updateUserMessage = (state = initialState, action) =>{
 switch(action.type){
     case 'USER_MESSAGES':
     return {chatbotResponse: state.botResponse}
     case 'CHATBOT_RESPONSES':
     return { messagesFromTheUser: state.messagesFromTheUser};
     default:return state;
 }
}


