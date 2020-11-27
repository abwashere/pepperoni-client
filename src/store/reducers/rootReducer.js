import { combineReducers } from "redux";
import authReducer from "./_authReducer";
import userReducer from "./_userReducer";
import foodReducer from "./_foodReducer";

export const rootReducer = combineReducers({
	authStore: authReducer,
	userStore: userReducer,
	foodStore: foodReducer,
});
