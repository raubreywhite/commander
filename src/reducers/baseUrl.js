const baseUrlReducer = (state = "localhost:8080/", action) => {

	switch (action.type) {
		case 'SET_BASE_URL':
			return action.value
		default:
			return state
	}
}

export default baseUrlReducer
