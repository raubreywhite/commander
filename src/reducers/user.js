const userReducer = (state=false, action) => {

	switch (action.type) {
		case 'SET_USER':
			return {
        user: action.value
			}
		default:
			return state
	}
}

export default userReducer

/*
id: action.value.id,
        session: action.value.sesion,
        email: action.value.email,
        name: action.value.name,
        clients: action.value.clients,
        password: action.value.password,
        success: action.value.success,
        loggedin: action.value.loggedin*/
