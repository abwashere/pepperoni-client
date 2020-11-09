import * as foodApi from "./../../api/foodApiHandler";

//1
export const getMenu = () => {
	return async (dispatch) => {
		try {
			const res = await foodApi.getAllFood();
			dispatch({ type: "food/getMenu", payload: res.data });
		} catch (error) {
			console.log(error.message);
			dispatch({ type: "food/getMenu_error", payload: error.message });
		}
	};
};

//2 (shorter syntax)
export const getMeal = (id) => async (dispatch) => {
	try {
		const res = await foodApi.getOneFood(id);
		dispatch({ type: "food/getMeal", payload: res.data });
	} catch (error) {
		console.log(error.message);
		//dispatch({ type: "food/getMeal_error", payload: error.message });
	}
};

//3
export const createMeal = () => async (dispatch) => {
	try {
		const res = await foodApi.createFood();
		dispatch({ type: "food/create", payload: res.data });
	} catch (error) {
		console.log(error.message);
		//dispatch({ type: "food/create_error", payload: error.message });
	}
};

//4
export const updateMeal = (id, updatedInfos) => async (dispatch) => {
	try {
		const res = await foodApi.updateFood(id, updatedInfos);
		dispatch({ type: "food/update", payload: res.data });
	} catch (error) {
		console.log(error.message);
		//dispatch({ type: "food/update_error", payload: error.message });
	}
};

//5
export const deleteMeal = (id) => async (dispatch) => {
	try {
		const res = await foodApi.deleteFood(id);
		dispatch({ type: "food/delete", payload: res.data });
	} catch (error) {
		console.log(error.message);
		//dispatch({ type: "food/delete_error", payload: error.message });
	}
};
