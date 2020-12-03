import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL + "/api/auth",
	withCredentials: true, // Cookie is sent to client (used for session)
});

const api = {
	service,

	registerUser(newUser) {
		return service.post("/signup", newUser);
	},

	login(creds) {
		return service.post("/login", creds);
	},

	isLoggedIn(id) {
		return service.get(`isLoggedIn/${id}`);
	},

	logout() {
		return service.get("/logout");
	},
};

export default api;
