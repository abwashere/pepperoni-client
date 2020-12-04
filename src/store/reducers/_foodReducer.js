const initState = {
	menu: [],
	errorMessage: null,
};

const foodReducer = (state = initState, action) => {
	switch (action.type) {
		//--------------------------
		case "food/getMenu":
			return {
				...state,
				menu: action.payload,
			};

		case "food/getMenu_error":
			console.log("reducer => fail to get the menu: ", action.payload);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "food/getMeal":
			return {
				...state,
				pickedMeal: action.payload,
			};

		case "food/getMeal_error":
			console.log("reducer => fail to getting a meal:", action.payload);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "food/create":
			return {
				...state,
				menu: [...state.menu, action.payload],
			};

		case "food/create_error":
			console.log(
				"reducer => fail to create meal:",
				action.payload.response.data.errors
			);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "food/update":
			return {
				...state,
				menu: state.menu.map((meal) =>
					meal._id === action.payload._id ? action.payload : meal
				),
			};

		case "food/update_error":
			console.log("reducer => fail to update meal:", action.payload);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "food/delete":
			console.log("deleted : ", action.payload);
			return {
				...state,
				menu: state.menu.filter((meal) => meal._id !== action.payload._id),
			};

		case "food/delete_error":
			console.log("reducer => fail to delete meal:", action.payload);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "food/clearMessages":
			return {
				...state,
				errorMessage: null,
			};

		default:
			return state;
	}
};

export default foodReducer;
