import foodReducer from "./_foodReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	foodStore: foodReducer,
});
