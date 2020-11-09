const initState = {
	menu: [],
	pickedMeal: [],
	//error: "",
};

const foodReducer = (state = initState, action) => {
	switch (action.type) {
		//1
		case "food/getMenu":
			console.log("reducer got the menu: ", action.payload);

			return {
				...state,
				menu: action.payload,
			};

		case "food/getMenu_error":
			console.log("error trying to get the menu: ", action.payload);

			return {
				...state,
				error: action.payload,
			};

		//2
		case "food/getMeal":
			console.log("reducer got meal selected:", action.payload);

			return {
				...state,
				pickedMeal: action.payload,
			};

		//3
		case "food/create":
			console.log("reducer got created meal:", action.payload);

			return {
				...state,
				menu: [...state.menu, action.payload],
			};

		//4
		case "food/update":
			console.log("reducer got updated meal:", action.payload);

			return {
				...state,
				menu: state.menu.map((meal) =>
					meal._id === action.payload._id ? action.payload : meal
				),
			};

		//5
		case "food/delete":
			console.log("reducer got deleted meal:", action.payload);
			return {
				...state,
				menu: state.menu.filter((meal) => meal._id !== action.payload._id),
			};

		//default
		default:
			return state;
	}
};

export default foodReducer;
