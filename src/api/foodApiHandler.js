import axios from "axios";
//const baseURL = process.env.SERVER_URL + "/api/food";

const baseURL = "http://localhost:4000/api/food";

export const getAllFood = () => {
	console.log("API call for all food !");
	return axios.get(`${baseURL}`);
};

export const getOneFood = (id) => axios.get(`${baseURL}/${id}`);

export const createFood = () => axios.get(`${baseURL}/create`);

export const updateFood = (id, food) =>
	axios.get(`${baseURL}/edit/${id}`, food);

export const deleteFood = (id) => axios.delete(`${baseURL}/delete/${id}`);

// const service = axios.create({
// 	baseURL: process.env.SERVER_URL + "/api/food",
// 	withCredentials: true, // Cookie is sent to client when using this service. (used for session)
// });

// function errorHandler(error) {
// 	if (error.response.data) {
// 		console.log(error.response && error.response.data);
// 		throw error;
// 	}
// 	throw error;
// }

// export default {
// 	service,

// 	getAllFood( ) {
// 			return service
// 				.get("/")
// 				.then((res) => res.data)
// 				.catch(errorHandler);

// 	},

// 	getOnePlayer(id) {
// 		return service
// 			.get(`/${id}`)
// 			.then((res) => res.data)
// 			.catch(errorHandler);
// 	},

// 	updatePlayer(id, playerInfo) {
// 		return service
// 			.patch(`/${id}`, playerInfo)
// 			.then((res) => res.data)
// 			.catch(errorHandler);
// 	},

// 	deletePlayer(id) {
// 		return service
// 			.delete(`/${id}`)
// 			.then((res) => res.data)
// 			.catch(errorHandler);
// 	},
// }
