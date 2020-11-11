const initState = {
	menu: [],
	//errorFromApi: null,
	pickedMeal: null,
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

		// case "food/getMenu_error":
		// 	console.log("reducer => fail to get the menu: ", action.payload);

		// 	return {
		// 		...state,
		// 		errorFromApi: action.payload,
		// 	};

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
		// case "food/create_error":
		// 	console.log("reducer => fail to create meal:", action.payload);

		// 	return {
		// 		...state,
		// 		errorFromApi: action.payload,
		// 	};

		//4
		case "food/update":
			console.log("reducer => got updated meal:", action.payload);

			return {
				...state,
				menu: state.menu.map((meal) =>
					meal._id === action.payload._id ? action.payload : meal
				),
			};
		// case "food/update_error":
		// 	console.log("reducer => fail to update meal:", action.payload);

		// 	return {
		// 		...state,
		// 		errorFromApi: action.payload,
		// 	};

		//5
		case "food/delete":
			console.log("reducer => got deleted meal:", action.payload);
			return {
				...state,
				menu: state.menu.filter((meal) => meal._id !== action.payload._id),
			};
		// case "food/delete_error":
		// 	console.log("reducer => fail to delete meal:", action.payload);
		// 	return {
		// 		...state,
		// 		errorFromApi: action.payload,
		// 	};

		//default
		default:
			return state;
	}
};

export default foodReducer;
