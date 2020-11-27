const initState = {
	users: [],
	pickedUser: null,
	errorMessages: null,
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		//1
		case "users/getAllUsers":
			console.log("reducer got : " + action.payload.length + " employees");

			return {
				...state,
				users: action.payload,
			};

		//2
		case "users/getUser":
			console.log("reducer => selected user :", action.payload);

			return {
				...state,
				pickedUser: action.payload,
			};

		//3
		case "users/update":
			console.log("reducer => updated user:", action.payload);

			return {
				...state,
				users: state.users.map((user) =>
					user._id === action.payload._id ? action.payload : user
				),
			};

		//4
		case "users/delete":
			console.log("reducer => deleted user:", action.payload);
			return {
				...state,
				users: state.users.filter((user) => user._id !== action.payload._id),
			};

		default:
			return state;
	}
};

export default userReducer;
