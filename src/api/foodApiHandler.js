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

	getMeal(id) {
		return service.get(`/${id}`);
	},

	createMeal(newMeal) {
		return service.post("/create", newMeal);
	},

	updateMeal(id, meal) {
		return service.patch(`/edit/${id}`, meal);
	},

	deleteMeal(id) {
		return service.delete(`/delete/${id}`);
	},
};

export default api;
