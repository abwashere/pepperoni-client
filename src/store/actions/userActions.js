import * as userApi from "./../../api/userApiHandler";

//1
export const getAllUsers = () => {
	return async (dispatch) => {
		try {
			const res = await userApi.getAllUsers();
			dispatch({ type: "users/getAllUsers", payload: res.data });
		} catch (err) {
			console.log(err);
			dispatch({ type: "users/getAllUsers_error", payload: err });
		}
	};
};

//2
export const getUser = (id) => {
	return async (dispatch) => {
		try {
			const res = await userApi.getOneUser(id);
			dispatch({ type: "users/getUser", payload: res.data });
		} catch (err) {
			dispatch({ type: "users/getUser_error", payload: err });
		}
	};
};

//3
export const updateUser = (id, updatedInfos) => async (dispatch) => {
	try {
		const res = await userApi.updateUser(id, updatedInfos);
		dispatch({ type: "users/update", payload: res.data });
	} catch (err) {
		console.log(err);
		dispatch({ type: "users/update_error", payload: err });
	}
};

//4 (shorter syntax)
export const deleteUser = (id) => async (dispatch) => {
	try {
		const res = await userApi.deleteUser(id);
		dispatch({ type: "users/delete", payload: res.data });
	} catch (err) {
		console.log(err);
		dispatch({ type: "users/delete_error", payload: err });
	}
};
