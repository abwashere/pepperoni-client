import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL + "/api/users",
	withCredentials: true,
});

const api = {
	service,

	getAllUsers() {
		return service.get("/");
	},

	getOneUser(id) {
		return service.get(`/${id}`);
	},

	deleteUser(id) {
		return service.delete(`/delete/${id}`);
	},

	updateUser(id, user) {
		return service.patch(`/edit/${id}`, user);
	},
};

export default api;
