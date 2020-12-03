import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL + "/api/food",
	withCredentials: true,
});

const api = {
	service,

	getAllFood() {
		return service.get();
	},

	getOneFood(id) {
		return service.get(`/${id}`);
	},

	createFood(newFood) {
		return service.post("/create", newFood);
	},

	updateFood(id, food) {
		return service.patch(`/edit/${id}`, food);
	},

	deleteFood(id) {
		return service.delete(`/delete/${id}`);
	},
};

export default api;
