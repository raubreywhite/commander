const redirectUrlReducer = (state = "/", action) => {

	switch (action.type) {
		case 'SET_REDIRECT_URL':
			return action.value
		default:
			return state
	}
}

export default redirectUrlReducer
