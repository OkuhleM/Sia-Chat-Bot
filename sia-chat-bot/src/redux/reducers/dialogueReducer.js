
const initialState = {
    messagesFromTheUser: [],
    chatbotResponse: {}
};



export const updateUserMessage = (state = initialState, action) =>{
 switch(action.type){
     case 'USER_MESSAGES':
     return {chatbotResponse: state.chatbotResponse}
     case 'CHATBOT_RESPONSES':
     return { messagesFromTheUser: state.messagesFromTheUser};
     default:return state;
 }
}


