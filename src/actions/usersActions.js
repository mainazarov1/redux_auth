import { getAllUsers } from "../components/Services/api";

export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export const getUsers = () => ({
	type: GET_USERS,
})

export const getUsersSuccess = (users) => ({
	type: GET_USERS_SUCCESS,
	payload: users,
})

export const getUsersFailure = () => ({
	type: GET_USERS_FAILURE,
})

export function fetchUsers() {
	return async (dispatch) => {
		dispatch(getUsers())
		try {
			const token = localStorage.getItem('token');
			const response = await getAllUsers(token);
			const data = await response.data.users;
			dispatch(getUsersSuccess(data))
		} catch (error) {
			dispatch(getUsersFailure())
		}
	}
}