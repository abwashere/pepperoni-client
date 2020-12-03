import authApi from "./../../api/authApiHandler";

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

			localStorage.setItem("sessionCookie", JSON.stringify(res.data.cookie));
			localStorage.setItem("sessionUser", JSON.stringify(res.data.user));

			dispatch({
				type: "auth/login",
				payload: {
					user: res.data.user,
					message: res.data.successMessage,
				},
			});
		} catch (err) {
			dispatch(errorActionCreator("auth/login_error", err));
		}
	};
};

//isLoggedIn
export const isLoggedIn = (id) => {
	return async (dispatch) => {
		try {
			const res = await authApi.isLoggedIn(id);
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
			localStorage.removeItem("sessionCookie");
			localStorage.removeItem("sessionUser");
			dispatch({ type: "auth/logout", payload: res.data });
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
