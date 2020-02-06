import { combineReducers } from "redux";
import errors from "./errors";
import currentUser from "./currentUser";
import message from "./messages";
const rootReducer = combineReducers({
	currentUser,
	errors,
	message
});

export default rootReducer;