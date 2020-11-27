import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL + "/api/users";

export const getAllUsers = () => axios.get(baseURL);

export const getOneUser = (id) => axios.get(`${baseURL}/${id}`);

export const deleteUser = (id) => axios.delete(`${baseURL}/delete/${id}`);

export const updateUser = (id, user) =>
	axios.patch(`${baseURL}/edit/${id}`, user);

// createUser = auth signUp
