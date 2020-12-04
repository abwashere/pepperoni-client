import userApi from "./../../api/userApiHandler";

/* Errors dispatching */
export const errorActionCreator = (errorType, error) => {
	return {
		type: errorType,
		error: true,
		payload: error,
	};
};

/* Get the employees list */
export const getAllUsers = () => {
	return async (dispatch) => {
		try {
			const res = await userApi.getAllUsers();
			dispatch({ type: "users/getAllUsers", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("users/getAllUsers_error", err));
		}
	};
};

/* Get one employee */
export const getUser = (id) => {
	return async (dispatch) => {
		try {
			const res = await userApi.getOneUser(id);
			dispatch({ type: "users/getUser", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("users/getUser_error", err));
		}
	};
};

/* Update employee's infos */
export const updateUser = (id, updatedInfos) => async (dispatch) => {
	try {
		const res = await userApi.updateUser(id, updatedInfos);
		dispatch({ type: "users/update", payload: res.data });
	} catch (err) {
		dispatch(errorActionCreator("users/update_error", err));
	}
};

/* Delete an employee */
export const deleteUser = (id) => async (dispatch) => {
	try {
		const res = await userApi.deleteUser(id);
		dispatch({ type: "users/delete", payload: res.data });
	} catch (err) {
		dispatch(errorActionCreator("users/delete_error", err));
	}
};
