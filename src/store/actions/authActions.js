import * as authApi from "./../../api/authApiHandler";

//how to handle errors ==> https://alexandrempsantos.com/sane-error-handling-react-redux/
export const errorActionCreator = (errorType, error) => {
	return {
		type: errorType,
		error: true,
		payload: error,
	};
};

//Register new user
export const registerUser = (newUser) => {
	return async (dispatch) => {
		try {
			const res = await authApi.registerUser(newUser);
			dispatch({ type: "auth/registerUser", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("auth/registerUser_error", err));
		}
	};
};

export const login = (user) => {
	return async (dispatch) => {
		try {
			const res = await authApi.login(user);
			dispatch({ type: "auth/login", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("auth/login_error", err));
		}
	};
};

//User is logged in
export const isLoggedIn = () => {
	return async (dispatch) => {
		try {
			const res = await authApi.isLoggedIn();
			dispatch({ type: "auth/isLoggedIn", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("auth/isLoggedIn_error", err));
		}
	};
};

//Logout
export const logout = () => {
	return async (dispatch) => {
		try {
			const res = await authApi.logout();
			dispatch({ type: "auth/logout", payload: res.data });
			//payload is {message}
		} catch (err) {
			dispatch(errorActionCreator("auth/logout_error", err));
		}
	};
};

//Clear messages
export const clearMessages = () => {
	return (dispatch) => {
		dispatch({ type: "auth/clearMessages" });
	};
};
