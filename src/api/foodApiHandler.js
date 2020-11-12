import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL + "/api/food";

export const getAllFood = () => axios.get(baseURL);

export const getOneFood = (id) => axios.get(`${baseURL}/${id}`);

export const createFood = (newFood) => axios.post(`${baseURL}/create`, newFood);

export const updateFood = (id, food) =>
	axios.patch(`${baseURL}/edit/${id}`, food);

export const deleteFood = (id) => axios.delete(`${baseURL}/delete/${id}`);
