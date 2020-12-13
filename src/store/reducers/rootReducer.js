import { combineReducers } from "redux";
import authReducer from "./_authReducer";
import userReducer from "./_userReducer";
import foodReducer from "./_foodReducer";
import reservationReducer from "./_reservationReducer";

export const rootReducer = combineReducers({
	authStore: authReducer,
	userStore: userReducer,
	foodStore: foodReducer,
	reservationStore: reservationReducer,
});
