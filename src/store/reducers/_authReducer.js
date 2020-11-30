const initState = {
	isAuthentificated: false,
	user: null,
	successMessage: null,
	invalidCredentials: null,
	warningMessage: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		//----------------------------------------
		case "auth/registerUser":
			return {
				...state,
				successMessage: action.payload.successMessage || null,
				invalidCredentials: null,
			};

		case "auth/registerUser_error":
			return {
				...state,
				invalidCredentials: action.payload.response.data.errors || null,
			};

		//----------------------------------------
		case "auth/login":
			return {
				...state,
				isAuthentificated: action.payload ? true : false,
				user: action.payload.user || null,
				successMessage: action.payload.message || null,
			};

		case "auth/login_error":
			return {
				...state,
				invalidCredentials: action.payload.response.data.errors || null,
			};

		//----------------------------------------
		case "auth/isLoggedIn":
			return {
				...state,
				isAuthentificated: action.payload ? true : false,
				user: action.payload.user || null,
			};

		case "auth/isLoggedIn_error":
			return {
				...state,
				warningMessage: action.payload.response.data.errors,
			};

		//----------------------------------------
		case "auth/logout":
			return {
				...state,
				isAuthentificated: false,
				user: null,
				successMessage: action.payload.successMessage || null,
			};
		case "auth/logout_error":
			return {
				...state,
				warningMessage: action.payload.response.data.errors,
			};

		//----------------------------------------
		case "auth/clearMessages":
			return {
				...state,
				successMessage: null,
				invalidCredentials: null,
				warningMessage: null,
			};

		default:
			return state;
	}
};

export default authReducer;
