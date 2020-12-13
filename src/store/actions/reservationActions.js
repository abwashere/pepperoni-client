import reservationApi from "./../../api/reservationApiHandler";

/* Errors dispatching */
export const errorActionCreator = (errorType, error) => {
	return {
		type: errorType,
		error: true,
		payload: error,
	};
};

/* Get all reservations */
export const getAllReservations = () => {
	return async (dispatch) => {
		try {
			const res = await reservationApi.getAllReservations();
			dispatch({ type: "reservation/getReservations", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("reservation/getReservations_error", err));
		}
	};
};

/* Check slot availability */
export const postSlot = (requestedDate, requestedTime) => {
	return async (dispatch) => {
		try {
			const res = await reservationApi.postSlot({
				requestedDate,
				requestedTime,
			});
			dispatch({ type: "reservation/slot", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("reservation/slot_error", err));
		}
	};
};

/* Book a table on the selected slot */
export const postReservation = (reservation) => {
	return async (dispatch) => {
		try {
			const res = await reservationApi.postReservation(reservation);
			dispatch({ type: "reservation/create", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("reservation/create_error", err));
		}
	};
};

/* Cancel a reservation */
export const cancelReservation = (slotID, tableID) => {
	return async (dispatch) => {
		try {
			const res = await reservationApi.cancelReservation({
				slotID,
				tableID,
			});
			dispatch({ type: "reservation/cancel", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("reservation/cancel_error", err));
		}
	};
};

export const getTables = () => {
	return async (dispatch) => {
		try {
			const res = await reservationApi.getTables();
			dispatch({ type: "tables/getAll", payload: res.data });
		} catch (err) {
			dispatch(errorActionCreator("tables/getAll_error", err));
		}
	};
};

/* getSlot(id) */

/* Clear menu messages */
export const clearMessages = () => {
	return (dispatch) => {
		dispatch({ type: "reservation/clearMessages" });
	};
};
