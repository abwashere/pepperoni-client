import * as foodApi from "./../../api/foodApiHandler";

//1
export const getMenu = () => {
	return async (dispatch) => {
		try {
			const res = await foodApi.getAllFood();
			dispatch({ type: "food/getMenu", payload: res.data });
		} catch (err) {
			console.log(err);
			dispatch({ type: "food/getMenu_error", payload: err });
		}
	};
};

//2
export const getMeal = (id) => {
	return async (dispatch) => {
		try {
			const res = await foodApi.getOneFood(id);
			dispatch({ type: "food/getMeal", payload: res.data });
		} catch (err) {
			console.log(err);
			//dispatch({ type: "food/getMeal_error", payload: err });
		}
	};
};

//3
export const createMeal = () => {
	return async (dispatch) => {
		try {
			const res = await foodApi.createFood();
			dispatch({ type: "food/create", payload: res.data });
		} catch (err) {
			console.log(err);
			dispatch({ type: "food/create_error", payload: err });
		}
	};
};

//4 (shorter syntax)
export const updateMeal = (id, updatedInfos) => async (dispatch) => {
	try {
		const res = await foodApi.updateFood(id, updatedInfos);
		dispatch({ type: "food/update", payload: res.data });
	} catch (err) {
		console.log(err);
		dispatch({ type: "food/update_error", payload: err });
	}
};

//5 (shorter syntax)
export const deleteMeal = (id) => async (dispatch) => {
	try {
		const res = await foodApi.deleteFood(id);
		dispatch({ type: "food/delete", payload: res.data });
	} catch (err) {
		console.log(err);
		dispatch({ type: "food/delete_error", payload: err });
	}
};
