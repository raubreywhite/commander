const loggedInReducer = (state = false, action) => {

	switch (action.type) {
		case 'SET_LOGIN_STATE':
			return action.value
		default:
			return state
	}
}

export default loggedInReducer
