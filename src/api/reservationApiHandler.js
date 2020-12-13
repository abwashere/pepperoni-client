import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL + "/api/tables",
	withCredentials: true,
});

const api = {
	service,

	getAllReservations() {
		return service.get("/reservations");
	},

	postSlot(dateTime) {
		return service.post("/slot", dateTime);
	},

	postReservation(resa) {
		return service.post("/reservation", resa);
	},

	cancelReservation(resa) {
		return service.patch("/cancelation", resa);
	},

	getTables() {
		return service.get("/");
	},

	getSlot(id) {
		return service.get(`/slot/${id}`);
	},
};

export default api;
