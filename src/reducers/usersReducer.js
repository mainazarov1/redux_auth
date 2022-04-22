import * as actions from './../actions/usersActions'

export const initialState = {
	users: [],
	loading: false,
	hasError: false,
}

export function usersReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_USERS:
			return { ...state, loading: true };
		case actions.GET_USERS_SUCCESS:
			return { users: action.payload, loading: false, hasError: false }
		case actions.GET_USERS_FAILURE:
			return { ...state, loading: false, hasError: true }
		default:
			return state
	}
}