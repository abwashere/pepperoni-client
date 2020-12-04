import foodApi from "./../../api/foodApiHandler";

/* Errors dispatching */
export const errorActionCreator = (errorType, error) => {
	return {
		type: errorType,
		error: true,
		payload: error,
	};
};

/* Get the menu */
export const getMenu = () => {
	return async (dispatch) => {
		try {
			const res = await foodApi.getAllFood();
			dispatch({ type: "food/getMenu", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("food/getMenu_error", err));
		}
	};
};

/* Get a meal */
export const getMeal = (id) => {
	return async (dispatch) => {
		try {
			const res = await foodApi.getMeal(id);
			dispatch({ type: "food/getMeal", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("food/getMeal_error", err));
		}
	};
};

/* Create a meal */
export const createMeal = (newMeal) => {
	return async (dispatch) => {
		try {
			const res = await foodApi.createMeal(newMeal);
			dispatch({ type: "food/create", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("food/create_error", err));
		}
	};
};

/* Update a meal */
export const updateMeal = (id, updatedInfos) => async (dispatch) => {
	try {
		const res = await foodApi.updateMeal(id, updatedInfos);
		dispatch({ type: "food/update", payload: res.data });
	} catch (err) {
		dispatch(errorActionCreator("food/update_error", err));
	}
};

/* Delete a meal */
export const deleteMeal = (id) => async (dispatch) => {
	try {
		const res = await foodApi.deleteMeal(id);
		dispatch({ type: "food/delete", payload: res.data });
	} catch (err) {
		dispatch(errorActionCreator("food/delete_error", err));
	}
};

/* Clear menu messages */
export const clearMessages = () => {
	return (dispatch) => {
		dispatch({ type: "food/clearMessages" });
	};
};
