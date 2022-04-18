import { combineReducers } from "redux";
import {updateUserMessage} from "./dialogueReducer";

const rootReducer = combineReducers({
initialState: updateUserMessage,

});

export default rootReducer;