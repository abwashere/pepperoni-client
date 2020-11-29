import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL + "/api/auth";

export const registerUser = (newUser) =>
	axios.post(`${baseURL}/signup`, newUser);

export const login = (creds) => axios.post(`${baseURL}/login`, creds);

export const isLoggedIn = () => axios.get(`${baseURL}/isLoggedIn`);

export const logout = () => axios.get(`${baseURL}/logout`);
