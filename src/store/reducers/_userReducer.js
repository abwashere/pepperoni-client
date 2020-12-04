const initState = {
	users: [],
	errorMessages: null,
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		//--------------------------
		case "users/getAllUsers":
			console.log("reducer got : " + action.payload.length + " employees");
			return {
				...state,
				users: action.payload,
			};

		case "users/getAllUsers_error":
			console.log("reducer got an error :", action.payload);

			return {
				...state,
				errorMessages: action.payload.response.data.errors,
			};

		//--------------------------
		case "users/getUser":
			return {
				...state,
				pickedUser: action.payload,
			};

		case "users/getUser_error":
			console.log("reducer got an error :", action.payload);
			return {
				...state,
				errorMessages: action.payload.response.data.errors,
			};

		//--------------------------
		case "users/update":
			return {
				...state,
				users: state.users.map((user) =>
					user._id === action.payload._id ? action.payload : user
				),
			};

		case "users/update_error":
			console.log("reducer got an error :", action.payload);
			return {
				...state,
				errorMessages: action.payload.response.data.errors,
			};

		//--------------------------
		case "users/delete":
			return {
				...state,
				users: state.users.filter((user) => user._id !== action.payload._id),
			};

		case "users/delete_error":
			console.log("reducer got an error :", action.payload);
			return {
				...state,
				errorMessages: action.payload.response.data.errors,
			};

		default:
			return state;
	}
};

export default userReducer;
