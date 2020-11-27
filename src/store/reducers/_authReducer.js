const initState = {
	userIsLoggedIn: false,
	loggedUser: null,
	successMessage: null,
	invalidCredentials: null,
	warningMessage: null,
	//errorFromApi: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		//1
		case "auth/registerUser":
			console.log(
				"reducer tried to create new user and got from api : " + action.payload
			);

			return {
				...state,
				// userIsLoggedIn: action.payload.user ? true : false,
				// loggedUser: action.payload.user || null,
				successMessage: action.payload.successMessage || null,
				invalidCredentials: action.payload.invalidCredentials || null,
			};

		//2
		case "auth/login":
			console.log(
				"reducer tried to log in and got from api : " + action.payload
			);

			return {
				...state,
				userIsLoggedIn: action.payload.user ? true : false,
				loggedUser: action.payload.user || null,
				successMessage: action.payload.successMessage || null,
				invalidCredentials: action.payload.invalidCredentials || null,
			};

		case "auth/login_error":
			console.log(
				"reducer received an error from api : " + action.payload.message
			);

			return {
				...state,
				invalidCredentials: "Identifiants invalides.",
			};

		//3
		case "auth/isLoggedIn":
			console.log(
				"reducer tried to check logged in status and got from api : " +
					action.payload
			);

			return {
				...state,
				userIsLoggedIn: action.payload.user ? true : false,
				loggedUser: action.payload.user || null,
			};

		//4
		case "auth/logout":
			console.log(
				"reducer tried to log out and got from api : " + action.payload
			);

			return {
				...state,
				userIsLoggedIn: false,
				loggedUser: null,
				successMessage: action.payload.successMessage || null,
			};

		//5
		case "auth/clearMessages":
			console.log("reducer clear all messages : ");

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
