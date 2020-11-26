import * as authApi from "./../../api/authApiHandler";

//Register new user
export const registerUser = (newUser) => {
	return async (dispatch) => {
		try {
			const res = await authApi.registerUser(newUser);
			dispatch({ type: "auth/registerUser", payload: res.data });
			//payload is {user: obj} or {invalidCredentials: string}
		} catch (err) {
			console.log(err);
			dispatch({ type: "auth/registerUser_error", payload: err });
		}
	};
};

//Login
export const login = (user) => {
	return async (dispatch) => {
		try {
			const res = await authApi.login(user);
			dispatch({ type: "auth/login", payload: res.data });
			//payload is {loggedUser, message} or {invalidCredentials}
		} catch (err) {
			console.log(err);
			dispatch({ type: "auth/login_error", payload: err });
		}
	};
};

//User is logged in
export const isLoggedIn = () => {
	return async (dispatch) => {
		try {
			const res = await authApi.isLoggedIn();
			dispatch({ type: "auth/isLoggedIn", payload: res.data });
			//payload is {req.session.currentUser} or {message}
		} catch (err) {
			console.log(err);
			dispatch({ type: "auth/isLoggedIn_error", payload: err });
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
			console.log(err);
			dispatch({ type: "auth/logout_error", payload: err });
			//payload is {error, message}
		}
	};
};

//Clear messages
export const clearMessages = () => {
	return (dispatch) => {
		dispatch({ type: "auth/clearMessages" });
	};
};
