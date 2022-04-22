import axios from "axios";

const BASE_URL = 'https://sheltered-dusk-77313.herokuapp.com';

export const signIn = async ({ email, password }) => {
	const response = await axios.post(`${BASE_URL}/auth/signin`, { email, password });
	return response;
}

export const signUp = async ({ email, password, name, age }) => {
	const response = await axios.post(`${BASE_URL}/auth/signup`, { email, password, name, age });
	return response;
}

export const getUser = async (token) => {
	const response = await axios.get(`${BASE_URL}/users/me`, { headers: { "Authorization": `Bearer ${token}` } });
	return response;
}

export const getAllUsers = async (token) => {
	const response = await axios.get(`${BASE_URL}/users`, { headers: { "Authorization": `Bearer ${token}` } });
	return response;
}
