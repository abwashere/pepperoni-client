import { combineReducers } from "redux";
import authReducer from "./_authReducer";
import foodReducer from "./_foodReducer";

export const rootReducer = combineReducers({
	authStore: authReducer,
	foodStore: foodReducer,
});
