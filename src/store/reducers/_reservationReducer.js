const initState = {
	reservations: [],
	slot: null,
	client: null,
	isAvailable: false,
	tables: [],
	message: null,
	successMessage: null,
	errorMessage: null,
};

const reservationReducer = (state = initState, action) => {
	switch (action.type) {
		//--------------------------
		case "reservation/getReservations":
			return {
				...state,
				reservations: action.payload.bookedTables,
				message: action.payload.message || null,
			};

		case "reservation/getReservations_error":
			console.log("reducer => fail to get the reservations: ", action.payload);
			return {
				...state,
				reservations: [],
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "reservation/slot":
			return {
				...state,
				slot: action.payload.slot,
			};

		case "reservation/slot_error":
			console.log(
				"reducer => fail to create/get slot :",
				action.payload.response.data.errors
			);
			return {
				...state,
				slot: null,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "reservation/create":
			return {
				...state,
				slot: action.payload.slot,
				successMessage: action.payload.successMessage,
			};

		case "reservation/create_error":
			console.log(
				"reducer => fail to create reservation:",
				action.payload.response.data.errors
			);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "reservation/cancel":
			console.log("canceled : ", action.payload);
			return {
				...state,
				successMessage: action.payload.successMessage,
				reservations: state.reservations.filter(
					(reservation) => reservation._id !== action.payload.slot._id
				),
			};

		case "reservation/cancel_error":
			console.log("reducer => failed to cancel reservation:", action.payload);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "tables/getAll":
			console.log("list of tables : ", action.payload);
			return {
				...state,
				tables: action.payload.tables,
			};

		case "tables/getAll_error":
			console.log("reducer => failed to get tables:", action.payload);
			return {
				...state,
				errorMessage: action.payload.response.data.errors,
			};

		//--------------------------
		case "reservation/clearMessages":
			return {
				...state,
				message: null,
				successMessage: null,
				errorMessage: null,
			};

		default:
			return state;
	}
};

export default reservationReducer;
