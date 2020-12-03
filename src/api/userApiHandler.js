import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL + "/api/users",
	withCredentials: true,
});

const api = {
	service,

	getAllUsers() {
		return service.post("/");
	},

	getOneUser(id) {
		return service.post(`/${id}`);
	},

	deleteUser(id) {
		return service.get(`/delete/${id}`);
	},

	updateUser(id, user) {
		return service.get(`/edit/${id}`, user);
	},
};

export default api;
