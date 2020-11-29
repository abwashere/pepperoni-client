const initState = {
	userIsLoggedIn: false,
	loggedUser: null,
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
				userIsLoggedIn: action.payload.user ? true : false,
				loggedUser: action.payload.user || null,
				successMessage: action.payload.successMessage || null,
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
				userIsLoggedIn: action.payload.isLoggedIn,
				loggedUserId: action.payload.userId || null,
			};

		case "auth/isLoggedIn_error":
			return {
				warningMessage: action.payload.response.data.errors,
			};

		//----------------------------------------
		case "auth/logout":
			return {
				...state,
				userIsLoggedIn: false,
				loggedUser: null,
				successMessage: action.payload.successMessage || null,
			};
		case "auth/logout_error":
			console.log("Reducer failed to log out user.");
			return {
				...state,
				warningMessage: action.payload.response.data.errors,
			};

		//----------------------------------------
		case "auth/clearMessages":
			console.log("Reducer cleared all messages : ");
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
