const userReducer = (state=false, action) => {

	switch (action.type) {
		case 'SET_USER':
			return {
				id: action.value.id,
				session: action.value.session,
				email: action.value.email,
				name: action.value.email,
				password: action.value.password,
				projects: action.value.projects
			}
		default:
			return state
	}
}

export default userReducer
