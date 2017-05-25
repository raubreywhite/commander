const projectReducer = (state={}, action) => {

	switch (action.type) {
		case 'ADD_PROJECT':
			return {
				id: action.value.id,
				session: action.value.session,
				name: action.value.name,
				client: action.value.client,
				entries: action.value.entries,
			}
		default:
			return state
	}
}

const projectsReducer = (state=[], action) => {

	switch (action.type) {
		case 'ADD_PROJECT':
			return [
        ...state,
        projectReducer(undefined, action)
      ]
		case 'CLEAR_PROJECTS':
			return []
		default:
			return state
	}
}

export default projectsReducer
