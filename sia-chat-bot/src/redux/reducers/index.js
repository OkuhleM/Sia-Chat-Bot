import { combineReducers } from "redux";
import {updateUserMessage} from "./dialogueReducer";

const rootReducer = combineReducers({
dialogue: updateUserMessage,

});

export default rootReducer;