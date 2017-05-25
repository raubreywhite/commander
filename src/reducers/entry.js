const entryReducer = (state={}, action) => {

	switch (action.type) {
		case 'ADD_ENTRY':
			return {
				id: action.value.id,
				session: action.value.session,
				timeStart: action.value.timeStart,
				timeEnd: action.value.timeEnd,
				category: action.value.category,
				subcategory: action.value.subcategory,
				info: action.value.info,
			}
		default:
			return state
	}
}

const entriesReducer = (state=[], action) => {

	switch (action.type) {
		case 'ADD_ENTRY':
			return [
        ...state,
        entryReducer(undefined, action)
      ]
		case 'CLEAR_ENTERIES':
			return []
		default:
			return state
	}
}

export default entriesReducer
